package dev.lando.crm.controller;

import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.lando.crm.model.Residence;
import dev.lando.crm.repo.ResidenceRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ResidencesController {

    private ResidenceRepository residenceRepository;

    public ResidencesController(ResidenceRepository residenceRepository) {
        this.residenceRepository = residenceRepository;
    }

    @GetMapping("/residence/id/{id}")
    Optional<Residence> getResidenceById(@PathVariable String id) {
        return (Optional<Residence>) residenceRepository.findById(Long.valueOf(id));
    }

    @GetMapping("/residence/street/{street}")
    Collection<Residence> getAllResidencesOnStreet(@PathVariable String street) {
        return (Collection<Residence>) residenceRepository.findAllByStreet(street);
    }

    @GetMapping("/residence/all")
    Collection<Residence> getAllResidences() {
        return (Collection<Residence>) residenceRepository.findAll();
    }

    @PostMapping("/residence/add")
    ResponseEntity<Residence> createPet(@Valid @RequestBody Residence residence) throws URISyntaxException {
        Residence result = residenceRepository.save(residence);
        return ResponseEntity.ok().body(result);
    }
}
