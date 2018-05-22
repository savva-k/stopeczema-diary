package org.stopeczema.stopeczemadiaryapi.dto;

import lombok.Data;
import lombok.ToString;

/**
 * @author Savva Kodeikin
 */
@Data
@ToString(exclude = { "password", "matchingPassword" })
public class UserDTO {
    private String username;
    private String password;
    private String matchingPassword;
    private String email;
    private Boolean enabled;
}
