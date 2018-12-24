package org.stopeczema.stopeczemadiaryapi.services;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.stopeczema.stopeczemadiaryapi.beans.Authority;
import org.stopeczema.stopeczemadiaryapi.beans.UserEntity;
import org.stopeczema.stopeczemadiaryapi.dto.UserDTO;
import org.stopeczema.stopeczemadiaryapi.repositories.UserRepository;
import org.stopeczema.stopeczemadiaryapi.services.exceptions.UserExistsException;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Savva Kodeikin
 */
@Service
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private static final String DEFAULT_ROLE = "ROLE_USER";

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserDTO registerNewUser(UserDTO userDTO) throws UserExistsException {
        if (isUserAlreadyExists(userDTO)) {
            throw new UserExistsException("UserEntity with this email or username already exists!");
        }

        UserEntity userEntity = modelMapper.map(userDTO, UserEntity.class);
        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userEntity.setEnabled(true);
        userRepository.save(userEntity);
        userEntity.setAuthorities(generateDefaultAuthorities(userEntity));

        return modelMapper.map(userRepository.save(userEntity), UserDTO.class);
    }

    public UserDTO findByEmail(String email) {
        UserEntity userEntity = userRepository.findByEmail(email);

        if (userEntity == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return modelMapper.map(userEntity, UserDTO.class);
    }

    public UserDTO getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDTO result = null;

        try {
            UserDetails userDetails = (UserDetails) principal;
            UserEntity userEntity = userRepository.findByEmail(userDetails.getUsername());
            if (userEntity != null) {
                result = modelMapper.map(userEntity, UserDTO.class);
            }
        } catch (ClassCastException e) {
            logger.debug("Cannot cast " + principal + " to UserDetails - possibly anonymous user");
        }

        return result;
    }

    private boolean isUserAlreadyExists(UserDTO userDTO) {
        String email = userDTO.getEmail();
        String username = userDTO.getUsername();
        return userRepository.findByEmail(email) != null || userRepository.findByUsername(username) != null;
    }

    private List<Authority> generateDefaultAuthorities(UserEntity userEntity) {
        List<Authority> authorities = new ArrayList<>();
        Authority authority = new Authority();
        authority.setAuthority(DEFAULT_ROLE);
        authority.setUserId(userEntity.getId());
        authorities.add(authority);
        return authorities;
    }
}
