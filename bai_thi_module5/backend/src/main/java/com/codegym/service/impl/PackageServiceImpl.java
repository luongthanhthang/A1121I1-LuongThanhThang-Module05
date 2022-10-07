package com.codegym.service.impl;

import com.codegym.entity.Package;
import com.codegym.repository.IPackageRepository;
import com.codegym.service.IPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PackageServiceImpl implements IPackageService {
    @Autowired
    private IPackageRepository packageRepository;

    @Override
    public Page<Package> findAllPage(Pageable pageable) {
        return packageRepository.findAll(pageable);
    }

    @Override
    public List<Package> findAll() {
        return packageRepository.findAll();
    }

    @Override
    public Package create(Package aPackage) {
        return packageRepository.save(aPackage);
    }

    @Override
    public Package update(Package aPackage) {
        return packageRepository.save(aPackage);
    }

    @Override
    public void delete(Integer id) {
        packageRepository.deleteById(id);
    }

    @Override
    public Optional<Package> findById(Integer id) {
        return packageRepository.findById(id);
    }

    @Override
    public Page<Package> search(String idProduct, String endDate, Pageable pageable) {
        return packageRepository.search("%" + idProduct + "%"
                , "%" + endDate + "%"
                , pageable);
    }

    @Override
    public Page<Package> search(String idProduct, String endDate, String dateProduct1, String dateProduct2, Pageable pageable) {
        return packageRepository.search("%" + idProduct + "%"
                , "%" + endDate + "%"
                , dateProduct1
                , dateProduct2
                , pageable);
    }
}
