package com.codegym.entity;
import javax.persistence.*;


@Entity
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String idPackage;
    private Integer quantity;
    private String dateProduct;
    private String startDate;
    private String endDate;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public Package() {
    }

    public Package(String idPackage, Integer quantity, String dateProduct, String startDate, String endDate, Product product) {
        this.idPackage = idPackage;
        this.quantity = quantity;
        this.dateProduct = dateProduct;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
    }

    public Package(Integer id, String idPackage, Integer quantity, String dateProduct, String startDate, String endDate, Product product) {
        this.id = id;
        this.idPackage = idPackage;
        this.quantity = quantity;
        this.dateProduct = dateProduct;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIdPackage() {
        return idPackage;
    }

    public void setIdPackage(String idPackage) {
        this.idPackage = idPackage;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDateProduct() {
        return dateProduct;
    }

    public void setDateProduct(String dateProduct) {
        this.dateProduct = dateProduct;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
