package dev.lando.crm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import dev.lando.crm.model.Resident;

@RepositoryRestResource
public interface ResidentRepository extends JpaRepository<Resident, Long> {

}