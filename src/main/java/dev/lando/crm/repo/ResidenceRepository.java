package dev.lando.crm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.lando.crm.model.Residence;

public interface ResidenceRepository extends JpaRepository<Residence, Long> {

    List<Residence> findByStreetLike(String street);

    List<Residence> findByExtNumber(int extNum);
}
