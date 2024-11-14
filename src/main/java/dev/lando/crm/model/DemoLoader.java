package dev.lando.crm.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner {
    private final ContactRepository repository;

    @Autowired
    public DemoLoader(ContactRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Contact("Lando", "Icaza", "lando@mail.com"));
        this.repository.save(new Contact("Fulano", "Mendez", "fulano@mail.com"));
        this.repository.save(new Contact("Sutanita", "Perez", "sutanaMoxitahh@mail.com"));
        this.repository.save(new Contact("Delete", "Mee", "deleteme@mail.com"));
    }
}
