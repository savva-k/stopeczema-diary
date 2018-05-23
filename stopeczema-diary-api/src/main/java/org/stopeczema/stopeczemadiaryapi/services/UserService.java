package org.stopeczema.stopeczemadiaryapi.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.stopeczema.stopeczemadiaryapi.beans.User;
import org.stopeczema.stopeczemadiaryapi.dto.UserDTO;
import org.stopeczema.stopeczemadiaryapi.repositories.UserRepository;
import org.stopeczema.stopeczemadiaryapi.services.exceptions.UserExistsException;
import org.stopeczema.stopeczemadiaryapi.services.exceptions.UserNotFoundException;

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

    public UserDTO registerNewUser(UserDTO userDTO) throws UserExistsException {
        if (isUserAlreadyExists(userDTO)) {
            throw new UserExistsException("User with this email already exists!");
        }

        User user = modelMapper.map(userDTO, User.class);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(true);

        return modelMapper.map(userRepository.save(user), UserDTO.class);
    }

    public UserDTO findByEmail(String email) {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new UserNotFoundException("User not found!");
        }

        return modelMapper.map(user, UserDTO.class);
    }

    private boolean isUserAlreadyExists(UserDTO userDTO) {
        return userRepository.findByEmail(userDTO.getEmail()) != null;
    }
}
