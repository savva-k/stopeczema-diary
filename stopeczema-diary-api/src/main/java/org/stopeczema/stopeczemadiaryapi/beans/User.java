package org.stopeczema.stopeczemadiaryapi.beans;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author Savva Kodeikin
 */
@Data
@ToString(exclude = { "password", "matchingPassword" })
@Entity
@Table(name = "users")
public class User {
    @Id
    @NotNull
    @Size(min = 5, max = 100, message = "The username must contain from 5 to 100 symbols")
    private String username;
    @NotNull
    @Size(min = 5, max = 100, message = "The password must contain from 5 to 100 symbols")
    private String password;
    @Transient
    private String matchingPassword;
    @Email
    @Size(min = 5, max = 100, message = "The email must contain from 5 to 150 symbols")
    private String email;
    private Boolean enabled;
}
