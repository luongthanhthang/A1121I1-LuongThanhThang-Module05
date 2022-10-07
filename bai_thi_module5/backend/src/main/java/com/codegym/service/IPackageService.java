package com.codegym.service;

import com.codegym.entity.Package;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IPackageService {
    Page<Package> findAllPage(Pageable pageable);

    List<Package> findAll();

    Package create(Package aPackage);

    Package update(Package aPackage);

    void delete(Integer id);

    Optional<Package> findById(Integer id);

    Page<Package> search(String idProduct, String endDate, Pageable pageable);

    Page<Package> search(String idProduct, String endDate, String dateProduct1, String dateProduct2, Pageable pageable);

}
