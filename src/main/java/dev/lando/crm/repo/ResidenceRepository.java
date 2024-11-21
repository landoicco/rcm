package dev.lando.crm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.lando.crm.model.Residence;

public interface ResidenceRepository extends JpaRepository<Residence, Long> {

    List<Residence> findAllByStreet(String street);

    List<Residence> findByStreetAndExtNumber(String street, String extNumber);
}
