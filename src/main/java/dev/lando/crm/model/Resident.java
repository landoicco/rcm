package dev.lando.crm.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "residents")
public class Resident {
    private @Id @GeneratedValue Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    private String address;
    private String email;
    @Column(name = "phone_number")
    private Integer phoneNumber;

    public Resident(String firstName, String lastName, String address, String email, Integer phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    private Resident() {
    }
}
