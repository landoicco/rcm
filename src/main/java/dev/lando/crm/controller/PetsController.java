package dev.lando.crm.controller;

import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.lando.crm.model.Pet;
import dev.lando.crm.model.Residence;
import dev.lando.crm.repo.PetRepository;
import dev.lando.crm.repo.ResidenceRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class PetsController {

    private PetRepository petRepository;
    private ResidenceRepository residenceRepository;

    public PetsController(PetRepository petRepository, ResidenceRepository residenceRepository) {
        this.petRepository = petRepository;
        this.residenceRepository = residenceRepository;
    }

    @GetMapping("/pets")
    Collection<Pet> getAllPets() {
        return (Collection<Pet>) petRepository.findAll();
    }

    @PostMapping("/pet/add/{residenceId}")
    ResponseEntity<Pet> createPet(@Valid @RequestBody Pet pet, @PathVariable String residenceId)
            throws URISyntaxException {
        Optional<Residence> residenceOpt = residenceRepository.findById(Long.valueOf(residenceId));

        // Get residence from Optional and set new pet
        Residence residence = residenceOpt.get();

        pet.setResidence(residence);
        pet.setAddress(residence.getAddress());

        Pet result = petRepository.save(pet);
        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/pet/add/{street}/{extNumber}")
    ResponseEntity<Pet> createPetWithAddress(@Valid @RequestBody Pet pet, @PathVariable String street,
            @PathVariable String extNumber) throws URISyntaxException {
        Optional<Residence> residenceOpt = residenceRepository.findByStreetAndExtNumber(street, extNumber);

        // Get residence from Optional and set new pet
        Residence residence = residenceOpt.get();

        pet.setResidence(residence);
        pet.setAddress(residence.getAddress());

        Pet result = petRepository.save(pet);
        return ResponseEntity.ok().body(result);
    }
}
