package org.stopeczema.stopeczemadiaryapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.stopeczema.stopeczemadiaryapi.beans.Chip;

import java.util.List;

/**
 * @author Savva Kodeikin
 */
public interface ChipsRepository extends CrudRepository<Chip, Long> {
    List<Chip> findByType(String type);
    List<Chip> findByTextContaining(String text);
}
