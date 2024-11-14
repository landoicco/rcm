package dev.lando.crm.controller;

import java.net.URISyntaxException;
import java.util.Collection;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("/residents")
    Collection<Resident> contacts() {
        return (Collection<Resident>) residentRepository.findAll();
    }

    @PostMapping("/residents")
    ResponseEntity<Resident> createContact(@Valid @RequestBody Resident resident) throws URISyntaxException {
        Resident result = residentRepository.save(resident);
        return ResponseEntity.ok().body(result);
    }
}
