package org.stopeczema.stopeczemadiaryapi.beans;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
    private String type;
    private String text;
}
