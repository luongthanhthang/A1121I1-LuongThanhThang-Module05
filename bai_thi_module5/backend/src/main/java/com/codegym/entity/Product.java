package com.codegym.entity;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String address;
    private Integer cost;
    private String currency;


    public Product() {
    }

    public Product(String name, String address, Integer cost, String currency) {
        this.name = name;
        this.address = address;
        this.cost = cost;
        this.currency = currency;
    }

    public Product(Integer id, String name, String address, Integer cost, String currency) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.cost = cost;
        this.currency = currency;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
