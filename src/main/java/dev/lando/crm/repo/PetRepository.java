package dev.lando.crm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.lando.crm.model.Pet;

public interface PetRepository extends JpaRepository<Pet, Long> {

}
