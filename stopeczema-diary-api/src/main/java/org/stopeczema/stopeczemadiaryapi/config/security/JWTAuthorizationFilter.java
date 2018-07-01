package org.stopeczema.stopeczemadiaryapi.config.security;

import io.jsonwebtoken.Jwts;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.stopeczema.stopeczemadiaryapi.AppUserDetailsService;
import org.stopeczema.stopeczemadiaryapi.common.Constants;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author Savva Kodeikin
 */
public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private AppUserDetailsService appUserDetailsService;
    private String secret;

    public JWTAuthorizationFilter(AuthenticationManager authenticationManager,
                                  AppUserDetailsService appUserDetailsService, String secret) {

        super(authenticationManager);
        this.appUserDetailsService = appUserDetailsService;
        this.secret = secret;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        String authorizationHeader = request.getHeader(Constants.AUTHORIZATION);

        if (authorizationHeader != null && authorizationHeader.startsWith(Constants.BEARER)) {
            UsernamePasswordAuthenticationToken usernamePasswordAuth = getUserToken(authorizationHeader);
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuth);
        }

        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getUserToken(String token) {
        token = token.replace(Constants.BEARER, "");

        String username = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();

        UserDetails userDetails = appUserDetailsService.loadUserByUsername(username);

        if (userDetails != null) {
            return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails
                    .getAuthorities());
        }

        return null;
    }
}
