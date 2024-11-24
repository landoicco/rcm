package dev.lando.crm.controller;

import java.net.URISyntaxException;
import java.util.Collection;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.lando.crm.model.Resident;
import dev.lando.crm.repo.ResidentRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ResidentsController {
    private ResidentRepository residentRepository;

    public ResidentsController(ResidentRepository contactRepository) {
        this.residentRepository = contactRepository;
    }

    @GetMapping("/resident/all")
    Collection<Resident> residents() {
        return (Collection<Resident>) residentRepository.findAll();
    }

    @GetMapping("/resident/firstName/{firstName}")
    Collection<Resident> getSingleResidentByFirstName(@PathVariable String firstName) {
        return (Collection<Resident>) residentRepository.findByFirstNameIgnoreCase(firstName);
    }

    @GetMapping("/resident/lastName/{lastName}")
    Collection<Resident> getSingleResidentByLastName(@PathVariable String lastName) {
        return (Collection<Resident>) residentRepository.findByLastNameIgnoreCase(lastName);
    }

    @GetMapping("/resident/residence/{street}")
    Collection<Resident> getResidenceByResidenceStreet(@PathVariable String street) {
        return (Collection<Resident>) residentRepository.findByResidenceStreetIgnoreCase(street);
    }

    @GetMapping("/resident/residence/{street}/{extNumber}")
    Collection<Resident> getResidenceByResidenceStreetAndExteriorNumber(@PathVariable String street,
            @PathVariable String extNumber) {
        return (Collection<Resident>) residentRepository.findByResidenceStreet_AndResidenceExtNumber(street,
                extNumber);
    }

    @PostMapping("/residents")
    ResponseEntity<Resident> createResident(@Valid @RequestBody Resident resident) throws URISyntaxException {
        Resident result = residentRepository.save(resident);
        return ResponseEntity.ok().body(result);
    }
}
