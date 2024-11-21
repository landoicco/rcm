package dev.lando.crm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import dev.lando.crm.model.Resident;

@RepositoryRestResource
public interface ResidentRepository extends JpaRepository<Resident, Long> {

    List<Resident> findByFirstNameIgnoreCase(String firstName);

    List<Resident> findByLastNameIgnoreCase(String lastName);

    List<Resident> findByResidenceStreetIgnoreCase(String street);

    List<Resident> findByResidenceStreet_AndResidenceExtNumber(String street, String extNumber);

}