package com.codegym.service;

import com.codegym.entity.Product;

import java.util.List;

public interface IProductService {
    List<Product> findAll();
}
