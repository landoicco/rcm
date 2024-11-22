package dev.lando.crm.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "residences")
public class Residence {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "street_name")
    private String street;

    @Column(name = "exterior_number")
    private String extNumber;

    @Column(name = "is_empty")
    private boolean isEmpty;

    @JsonManagedReference
    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Resident> residents = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Pet> pets = new ArrayList<>();

    public Residence(String street, String extNumber, boolean isEmpty) {
        this.street = street;
        this.extNumber = extNumber;
        this.isEmpty = isEmpty;

    }

    private Residence() {
    }
}
