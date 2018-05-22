package org.stopeczema.stopeczemadiaryapi.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.stopeczema.stopeczemadiaryapi.beans.Chip;
import org.stopeczema.stopeczemadiaryapi.dto.ChipDTO;
import org.stopeczema.stopeczemadiaryapi.repositories.ChipsRepository;

import java.util.Collection;

/**
 * @author Savva Kodeikin
 */
@Service
public class ChipService {

    @Autowired
    private ChipsRepository chipsRepository;

    @Autowired
    private ModelMapper modelMapper;

    public Chip save(ChipDTO chipDTO) {
        Chip chip = modelMapper.map(chipDTO, Chip.class);
        chipsRepository.save(chip);
        return chip;
    }

    public Collection<Chip> findByText(String searchTerm) {
        return chipsRepository.findByTextContaining(searchTerm);
    }

    public Collection<Chip> findByType(String chipType) {
        return chipsRepository.findByType(chipType);
    }
}
