package org.stopeczema.stopeczemadiaryapi.beans;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

/**
 * @author Savva Kodeikin
 */
@Data
@ToString(exclude = { "password", "matchingPassword" })
@Entity
@Table(name = "se_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min = 5, max = 100, message = "The username must contain from 5 to 100 symbols")
    private String username;
    @NotNull
    @Size(min = 1, max = 150, message = "First name must contain up to 150 characters")
    private String firstName;
    @NotNull
    @Size(min = 1, max = 150, message = "Last name must contain up to 150 characters")
    private String lastName;
    @NotNull
    @Size(min = 5, max = 100, message = "The password must contain from 5 to 100 symbols")
    private String password;
    @Transient
    private String matchingPassword;
    @Email
    @Size(min = 5, max = 100, message = "The email must contain from 5 to 150 symbols")
    private String email;
    private Boolean enabled;
    @OneToMany(fetch = FetchType.EAGER, targetEntity = Authority.class)
    @JoinColumn(name = "userId")
    private List<Authority> authorities;

}
