package org.stopeczema.stopeczemadiaryapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.stopeczema.stopeczemadiaryapi.beans.Authority;
import org.stopeczema.stopeczemadiaryapi.beans.User;
import org.stopeczema.stopeczemadiaryapi.repositories.UserRepository;
import org.stopeczema.stopeczemadiaryapi.services.exceptions.UserNotFoundException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * @author Savva Kodeikin
 */
@Service
@Transactional
public class AppUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new UserNotFoundException("User not found!");
        }

        boolean enabled = user.getEnabled() != null ? user.getEnabled() : false;
        boolean accountNonExpired = true;
        boolean credentialsNonExpired = true;
        boolean accountNonLocked = true;

        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), enabled,
                accountNonExpired, credentialsNonExpired, accountNonLocked, getAuthorities(user.getAuthorities()));
    }

    private Collection<GrantedAuthority> getAuthorities(List<Authority> authorities) {
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        for (Authority authority : authorities) {
            grantedAuthorities.add(new SimpleGrantedAuthority(authority.getAuthority()));
        }
        return grantedAuthorities;
    }
}
