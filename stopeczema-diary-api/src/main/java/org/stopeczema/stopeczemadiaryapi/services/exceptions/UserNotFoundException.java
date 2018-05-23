package org.stopeczema.stopeczemadiaryapi.services.exceptions;

/**
 * @author Savva Kodeikin
 */
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {
    }

    public UserNotFoundException(String message) {
        super(message);
    }
}
