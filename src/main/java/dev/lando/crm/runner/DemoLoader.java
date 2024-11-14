package dev.lando.crm.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import dev.lando.crm.model.Resident;
import dev.lando.crm.repo.ResidentRepository;

@Component
public class DemoLoader implements CommandLineRunner {
    private final ResidentRepository repository;

    @Autowired
    public DemoLoader(ResidentRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Resident("Lando", "Icaza", "Street 1", "lando@mail.com", 2134));
        this.repository.save(new Resident("Fulano", "Mendez", "Street 2", "mendez@mail.com", 2112334));
        this.repository.save(new Resident("Sutanita", "Perez", "Street 3", "perez@mail.com", 21235534));
        this.repository.save(new Resident("Delete", "Mee", "Street 4", "mee@mail.com", 21342334));
        this.repository.save(new Resident("Maria", "DataBase", "Street 3", "mariadb@mail.com", 21623434));
    }
}