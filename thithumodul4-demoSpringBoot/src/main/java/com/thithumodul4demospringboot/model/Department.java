package com.thithumodul4demospringboot.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Department {
    @Id
    private int id;
    private String name;
}
