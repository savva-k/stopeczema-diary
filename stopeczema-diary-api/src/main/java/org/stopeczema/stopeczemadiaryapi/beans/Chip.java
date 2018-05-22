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
 * <p>A JPA entity that represents a chip that is used as:
 * <ul>
 * <li>Suggestions in some text fields</li>
 * <li>
 * Value for some diary's properties (that were chosen
 * the fields with corresponding suggestions
 * </li>
 * </ul>
 * </p>
 * <p>
 * E.g. activities are present as chips (like yoga, running, procrastinating)
 * </p>
 *
 * @author Savva Kodeikin
 */
@Data
@Entity
@Table(name = "se_chip")
public class Chip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min = 2, max = 100, message = "The field type must contain from 2 to 100 characters")
    private String type;
    @NotNull
    @Size(min = 2, max = 150, message = "The field text must contain from 2 to 150 characters")
    private String text;
}
