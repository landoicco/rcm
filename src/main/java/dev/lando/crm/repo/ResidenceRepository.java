package dev.lando.crm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.lando.crm.model.Residence;

public interface ResidenceRepository extends JpaRepository<Residence, Long> {

}
