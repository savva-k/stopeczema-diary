package org.stopeczema.stopeczemadiaryapi.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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

    private static final String DEFAULT_ROLE = "ROLE_USER";

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserDTO registerNewUser(UserDTO userDTO) throws UserExistsException {
        if (isUserAlreadyExists(userDTO)) {
            throw new UserExistsException("UserEntity with this email already exists!");
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
            throw new UsernameNotFoundException("Invalid credentials");
        }

        return modelMapper.map(userEntity, UserDTO.class);
    }

    private boolean isUserAlreadyExists(UserDTO userDTO) {
        return userRepository.findByEmail(userDTO.getEmail()) != null;
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
