package dev.lando.crm.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.lando.crm.model.Residence;

public interface ResidenceRepository extends JpaRepository<Residence, Long> {

    List<Residence> findAllByStreet(String street);

    Optional<Residence> findByStreetAndExtNumber(String street, String extNumber);
}
