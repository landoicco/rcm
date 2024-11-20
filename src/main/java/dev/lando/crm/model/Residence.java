package dev.lando.crm.model;

import java.util.ArrayList;
import java.util.List;

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

    private String address;

    @Column(name = "is_empty")
    private boolean isEmpty;

    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Resident> residents = new ArrayList<>();

    private Residence() {
    }

    public Residence(String address, boolean isEmpty, List<Resident> residents) {
        this.address = address;
        this.isEmpty = isEmpty;
        this.residents = residents;
    }
}
