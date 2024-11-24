package dev.lando.crm.controller;

import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.lando.crm.model.Pet;
import dev.lando.crm.repo.PetRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class PetsController {

    private PetRepository petRepository;

    public PetsController(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @GetMapping("/pets")
    Collection<Pet> getAllPets() {
        return (Collection<Pet>) petRepository.findAll();
    }

    @PostMapping("/pet/add")
    ResponseEntity<Pet> createPet(@Valid @RequestBody Pet pet) throws URISyntaxException {
        Pet result = petRepository.save(pet);
        return ResponseEntity.ok().body(result);
    }
}
