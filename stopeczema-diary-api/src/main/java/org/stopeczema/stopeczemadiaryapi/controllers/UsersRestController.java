package org.stopeczema.stopeczemadiaryapi.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.stopeczema.stopeczemadiaryapi.dto.UserDTO;
import org.stopeczema.stopeczemadiaryapi.services.UserService;

import java.util.concurrent.ThreadLocalRandom;

/**
 * @author Savva Kodeikin
 */
@RestController
@RequestMapping("/users")
public class UsersRestController {

    private static final String SUCCESSFULLY_CREATED = "UserEntity has been successfully created";

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/search/{searchTerm}")
    public UserDTO findByEmail(@PathVariable String searchTerm) {
        return userService.findByEmail(searchTerm);
    }

    @PostMapping
    public ResponseEntity<String> registerNewUser(@RequestBody UserDTO userDTO) {
        userService.registerNewUser(userDTO);
        return new ResponseEntity<>(SUCCESSFULLY_CREATED, HttpStatus.CREATED);
    }

    @GetMapping(value = "/check", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> isLoggedIn() {
        String answer = String.format("{ \"loggedIn\": %s }", ThreadLocalRandom.current().nextBoolean());
        return new ResponseEntity<String>(answer, HttpStatus.OK);
    }
}
