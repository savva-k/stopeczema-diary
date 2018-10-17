package org.stopeczema.stopeczemadiaryapi.dto.json.wrapper;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;
import org.stopeczema.stopeczemadiaryapi.dto.UserDTO;

/**
 * @author Savva Kodeikin
 */
@Data
@JsonTypeName("user")
public class UserWrapper {

    private UserDTO user;

    public UserWrapper(UserDTO userDTO) {
        this.user = userDTO;
    }
}
