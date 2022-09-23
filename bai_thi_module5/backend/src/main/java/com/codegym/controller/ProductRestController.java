package com.codegym.controller;

import com.codegym.entity.Package;
import com.codegym.entity.Product;
import com.codegym.service.IPackageService;
import com.codegym.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/products")
public class ProductRestController {
    @Autowired
    private IProductService productService;

    @Autowired
    private IPackageService packageService;

    @GetMapping
    public ResponseEntity<List<Product>> findAllProduct() {
        List<Product> productList = productService.findAll();
        if (productService == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(productList, HttpStatus.OK);
        }
    }
}
