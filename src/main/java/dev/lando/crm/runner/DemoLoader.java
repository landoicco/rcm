package dev.lando.crm.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import dev.lando.crm.model.Residence;
import dev.lando.crm.model.Resident;
import dev.lando.crm.repo.ResidenceRepository;
import dev.lando.crm.repo.ResidentRepository;

/**
 * This class takes care of creating mock data on the database
 * to allow testing on the app
 */
@Component
public class DemoLoader implements CommandLineRunner {
        private final ResidentRepository residentRepository;
        private final ResidenceRepository residenceRepository;

        @Autowired
        public DemoLoader(ResidentRepository residentRepository, ResidenceRepository residenceRepository) {
                this.residentRepository = residentRepository;
                this.residenceRepository = residenceRepository;
        }

        @Override
        public void run(String... strings) throws Exception {

                // Define Walsh family
                Residence walshHouse = new Residence("Strawberry St.", false, null);

                Resident walshOne = new Resident("Stan", "Walsh", walshHouse, "swalsh@mail.com",
                                "(+1) 55 06 00 3945");
                Resident walshTwo = new Resident("Theresa", "Walsh", walshHouse, "twalsh@mail.com",
                                "(+1) 55 45 15 4056");

                this.residenceRepository.save(walshHouse);
                this.residentRepository.save(walshOne);
                this.residentRepository.save(walshTwo);

                // Define Robertson family
                Residence robertsonHouse = new Residence("Cleveland Av.", false, null);

                Resident robertsonOne = new Resident("Kevin", "Robertson", robertsonHouse, "kevinr@mail.com",
                                "(+1) 55 06 23 3345");
                Resident robertsonTwo = new Resident("Theresa", "Robertson", robertsonHouse, "theresar@mail.com",
                                "(+1) 55 45 47 0845");
                Resident robertsonThree = new Resident("Mark", "Robertson", robertsonHouse, "markr@mail.com",
                                "(+1) 55 88 15 7642");

                this.residenceRepository.save(robertsonHouse);
                this.residentRepository.save(robertsonOne);
                this.residentRepository.save(robertsonTwo);
                this.residentRepository.save(robertsonThree);

                // Define Perez family
                Residence perezHouse = new Residence("Beech St.", false, null);

                Resident perezOne = new Resident("Carlos", "Perez", perezHouse, "cperez@mail.com",
                                "(+1) 55 65 15 5664");

                this.residenceRepository.save(perezHouse);
                this.residentRepository.save(perezOne);

        }
}