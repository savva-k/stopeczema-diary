package org.stopeczema.stopeczemadiaryapi.dto;

import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * @author Savva Kodeikin
 */
@Data
@ToString(exclude = { "password", "matchingPassword" })
public class UserDTO {
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private String matchingPassword;
    private String email;
    private Boolean enabled;
    private List<String> authorities;
}
