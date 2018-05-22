package org.stopeczema.stopeczemadiaryapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.stopeczema.stopeczemadiaryapi.beans.Chip;
import org.stopeczema.stopeczemadiaryapi.dto.ChipDTO;
import org.stopeczema.stopeczemadiaryapi.services.ChipService;

import java.util.Collection;

/**
 * @author Savva Kodeikin
 */
@RestController
@RequestMapping("/chips")
public class ChipsRestController {

    @Autowired
    private ChipService chipService;

    @GetMapping("/{chipType}")
    Collection<Chip> getChipsByType(@PathVariable String chipType) {
        return chipService.findByType(chipType);
    }

    @GetMapping("/search/{searchTerm}")
    Collection<Chip> findChipsByTextContaining(@PathVariable String searchTerm) {
        return chipService.findByText(searchTerm);
    }

    @PostMapping
    void addChip(@RequestBody ChipDTO chipDTO) {
        chipService.save(chipDTO);
    }
}
