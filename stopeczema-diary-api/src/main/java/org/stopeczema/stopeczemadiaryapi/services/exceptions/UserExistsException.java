package org.stopeczema.stopeczemadiaryapi.services.exceptions;

/**
 * @author Savva Kodeikin
 */
public class UserExistsException extends RuntimeException {
    public UserExistsException() {
    }

    public UserExistsException(String message) {
        super(message);
    }
}
