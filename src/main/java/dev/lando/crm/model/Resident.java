package dev.lando.crm.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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

    @JsonBackReference
    @ManyToOne
    private Residence residence;

    private String address;

    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    public Resident(String firstName, String lastName, Residence residence, String email, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.residence = residence;
        this.email = email;
        this.phoneNumber = phoneNumber;

        this.address = residence.getStreet() + " St., " + residence.getExtNumber();
    }

    private Resident() {
    }
}
