package org.stopeczema.stopeczemadiaryapi.beans;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author Savva Kodeikin
 */
@Data
@Entity
@Table(name = "se_authority")
public class Authority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private Long userId;
    @Size(min = 3, max = 50)
    private String authority;

    @Override
    public String toString() {
        return authority;
    }
}
