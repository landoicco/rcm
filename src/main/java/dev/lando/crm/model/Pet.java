package dev.lando.crm.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String address;

    private String type;

    @JsonBackReference
    @ManyToOne
    private Residence residence;

    public Pet(String name, String type, Residence residence) {
        this.name = name;
        this.type = type;
        this.residence = residence;

        this.address = getResidence().getStreet() + " St., " + getResidence().getExtNumber();
    }

    private Pet() {
    }
}
