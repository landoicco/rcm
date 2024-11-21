package dev.lando.crm.controller;

import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.lando.crm.model.Residence;
import dev.lando.crm.repo.ResidenceRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ResidencesController {

    private ResidenceRepository residenceRepository;

    public ResidencesController(ResidenceRepository residenceRepository) {
        this.residenceRepository = residenceRepository;
    }

    @GetMapping("/residences/street/{street}")
    Collection<Residence> getAllResidencesOnStreet(@PathVariable String street) {
        return (Collection<Residence>) residenceRepository.findAllByStreet(street);
    }
}
