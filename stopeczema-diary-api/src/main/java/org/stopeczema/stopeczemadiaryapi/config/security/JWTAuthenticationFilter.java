package org.stopeczema.stopeczemadiaryapi.config.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.stopeczema.stopeczemadiaryapi.common.Constants;
import org.stopeczema.stopeczemadiaryapi.dto.UserDTO;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;

/**
 * @author Savva Kodeikin
 */
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private static final int MILLIS_IN_SECOND = 1000;

    private AuthenticationManager authenticationManager;

    private String secret;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, String secret) {

        this.authenticationManager = authenticationManager;
        this.secret = secret;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        try {
            UserDTO user = new ObjectMapper().readValue(request.getInputStream(), UserDTO.class);
            String login = user.getEmail();
            String password = user.getPassword();
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(login, password);
            return authenticationManager.authenticate(authToken);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        ZonedDateTime expirationTimeUTC = ZonedDateTime.now(ZoneOffset.UTC).plus(Constants.TOKEN_LIFETIME, ChronoUnit
                .MILLIS);
        User user = (User) authResult.getPrincipal();

        String token = Jwts.builder()
                .setSubject(user.getUsername())
                .setExpiration(Date.from(expirationTimeUTC.toInstant()))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();

        response.addCookie(createCookie(token));
    }

    private Cookie createCookie(String token) {
        Cookie cookie = new Cookie(Constants.TOKEN, token);
        cookie.setHttpOnly(true);
        cookie.setMaxAge(Math.toIntExact(Constants.TOKEN_LIFETIME / MILLIS_IN_SECOND));
        return cookie;
    }
}
