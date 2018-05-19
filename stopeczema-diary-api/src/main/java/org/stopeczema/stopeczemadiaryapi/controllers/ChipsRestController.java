package org.stopeczema.stopeczemadiaryapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.stopeczema.stopeczemadiaryapi.beans.Chip;
import org.stopeczema.stopeczemadiaryapi.repositories.ChipsRepository;

import java.util.Collection;

/**
 * @author Savva Kodeikin
 */
@RestController
@RequestMapping("/chips")
public class ChipsRestController {

    @Autowired
    private ChipsRepository chipsRepository;

    @GetMapping("/{chipType}")
    Collection<Chip> getChipsByType(@PathVariable String chipType) {
        return chipsRepository.findByType(chipType);
    }

    @GetMapping("/search/{searchTerm}")
    Collection<Chip> findChipsByTextContaining(@PathVariable String searchTerm) {
        return chipsRepository.findByTextContaining(searchTerm);
    }

    @PostMapping
    void addChip(@RequestBody Chip chip) {
        chipsRepository.save(chip);
    }
}
