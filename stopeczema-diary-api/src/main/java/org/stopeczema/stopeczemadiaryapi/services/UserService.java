package org.stopeczema.stopeczemadiaryapi.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.stopeczema.stopeczemadiaryapi.beans.User;
import org.stopeczema.stopeczemadiaryapi.dto.UserDTO;
import org.stopeczema.stopeczemadiaryapi.repositories.UserRepository;
import org.stopeczema.stopeczemadiaryapi.services.exceptions.UserExistsException;

/**
 * @author Savva Kodeikin
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerNewUser(UserDTO userDTO) throws UserExistsException {
        if (isUserAlreadyExists(userDTO)) {
            throw new UserExistsException("User with this email already exists!");
        }

        User user = modelMapper.map(userDTO, User.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(true);

        return userRepository.save(user);
    }

    private boolean isUserAlreadyExists(UserDTO userDTO) {
        return userRepository.findByEmail(userDTO.getEmail()).isPresent();
    }
}
