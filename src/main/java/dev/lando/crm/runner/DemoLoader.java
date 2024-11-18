package dev.lando.crm.runner;

import java.math.BigInteger;

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
        this.repository.save(
                new Resident("Nicola", "Robertson", "Strawberry Lane", "nicor@mail.com", "(+1) 55 13 22 1126"));
        this.repository
                .save(new Resident("Kylie", "Walker", "Cleveland Avenue", "kyliew@mail.com",
                        "(+1) 55 16 65 3356"));
        this.repository
                .save(new Resident("Stephen", "Metcalfe", "Sherman Street", "stephenm@mail.com",
                        "(+1) 55 65 65 8676"));
        this.repository.save(
                new Resident("Theresa", "MacDonald", "Summit Avenue", "tmcdonald@mail.com",
                        "(+1) 55 45 15 4056"));
        this.repository
                .save(new Resident("Katherine", "Walsh", "Beech Street", "kwalsh@mail.com",
                        "(+1) 55 06 00 3945"));
    }
}