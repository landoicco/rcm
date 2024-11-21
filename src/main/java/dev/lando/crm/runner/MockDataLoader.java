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
public class MockDataLoader implements CommandLineRunner {
        private final ResidentRepository residentRepository;
        private final ResidenceRepository residenceRepository;

        @Autowired
        public MockDataLoader(ResidenceRepository residenceRepository, ResidentRepository residentRepository) {
                this.residentRepository = residentRepository;
                this.residenceRepository = residenceRepository;
        }

        @Override
        public void run(String... strings) throws Exception {

                /*
                 * DEFINE LILYPAD STREET
                 */

                // Define Walsh family
                Residence walshHouse = new Residence("Lilypad", "143", false);
                Resident walshOne = new Resident("Stan", "Walsh", walshHouse,
                                "swalsh@mail.com",
                                "(+1) 55 06 00 3945");
                Resident walshTwo = new Resident("Dan", "Walsh", walshHouse,
                                "dwalsh@mail.com",
                                "(+1) 55 45 15 4056");

                this.residenceRepository.save(walshHouse);
                this.residentRepository.save(walshOne);
                this.residentRepository.save(walshTwo);

                Residence olsonHouse = new Residence("Lilypad", "414", false);
                Resident olsonOne = new Resident("Alysa", "Olson", olsonHouse,
                                "aolson@mail.com",
                                "(+1) 5514864030");
                Resident olsonTwo = new Resident("Porter", "Olson", olsonHouse,
                                "polson@mail.com",
                                "(+1)-661-699-9222");

                this.residenceRepository.save(olsonHouse);
                this.residentRepository.save(olsonOne);
                this.residentRepository.save(olsonTwo);

                Residence franeckiHouse = new Residence("Lilypad", "133", false);
                Resident franeckiOne = new Resident("Clement", "Franecki", franeckiHouse,
                                "clementf@mail.com",
                                "(+1) 5514864030");
                Resident franeckiTwo = new Resident("Kris", "Franecki", franeckiHouse,
                                "krisf@mail.com",
                                "(+1)-661-699-9222");
                Resident franeckiThree = new Resident("Jayne", "Franecki", franeckiHouse,
                                "jaynef@mail.com",
                                "(+1)-661-699-9222");

                this.residenceRepository.save(franeckiHouse);
                this.residentRepository.save(franeckiOne);
                this.residentRepository.save(franeckiTwo);
                this.residentRepository.save(franeckiThree);

                /*
                 * DEFINE BELL STREET
                 */
                // Define Robertson family
                Residence robertsonHouse = new Residence("Bell", "234", false);

                Resident robertsonOne = new Resident("Kevin", "Robertson", robertsonHouse,
                                "kevinr@mail.com",
                                "(+1) 55 06 23 3345");
                Resident robertsonTwo = new Resident("Theresa", "Robertson", robertsonHouse,
                                "theresar@mail.com",
                                "(+1) 55 45 47 0845");
                Resident robertsonThree = new Resident("Mark", "Robertson", robertsonHouse,
                                "markr@mail.com",
                                "(+1) 55 88 15 7642");

                this.residenceRepository.save(robertsonHouse);
                this.residentRepository.save(robertsonOne);
                this.residentRepository.save(robertsonTwo);
                this.residentRepository.save(robertsonThree);

                /*
                 * DEFINE QUARRY STREET
                 */
                // Define Perez family
                Residence perezHouse = new Residence("Quarry", "453", false);

                Resident perezOne = new Resident("Carlos", "Perez", perezHouse,
                                "cperez@mail.com",
                                "(+1) 55 65 15 5664");

                this.residenceRepository.save(perezHouse);
                this.residentRepository.save(perezOne);

                // Define O'Hara family
                Residence oharaHouse = new Residence("Quarry", "323", false);

                Resident oharaOne = new Resident("Michael", "O'Hara", oharaHouse,
                                "mohara@mail.com",
                                "(+1) 55 65 15 5664");

                this.residenceRepository.save(oharaHouse);
                this.residentRepository.save(oharaOne);

                /*
                 * DEFINE SAPPHIRE STREET
                 */
                // Define Martell family adding
                Residence martellHouse = new Residence("Sapphire", "354", false);

                Resident martellOne = new Resident("Sonny", "Martell", martellHouse,
                                "sonnyp@mail.com",
                                "(+1) 55 65 15 5664");

                this.residenceRepository.save(martellHouse);
                this.residentRepository.save(martellOne);

        }
}