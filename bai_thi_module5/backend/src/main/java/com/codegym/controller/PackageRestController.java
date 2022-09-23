package com.codegym.controller;

import com.codegym.entity.Package;
import com.codegym.service.IPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/packages")
public class PackageRestController {
    @Autowired
    private IPackageService packageService;

//    @GetMapping
//    public ResponseEntity<List<Package>> findAllPackage() {
//        List<Package> packageList = packageService.findAll();
//        if (packageList == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        } else {
//            return new ResponseEntity<>(packageList, HttpStatus.OK);
//        }
//    }

    //    ++++++++++Phân trang+++++++++
    @GetMapping("/{page}/{size}")
    public ResponseEntity<Page<Package>> findAllPackage(@PathVariable("page") Integer page
            , @PathVariable("size") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Package> packageList = packageService.findAllPage(pageable);
        if (packageList == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(packageList, HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<Package> createPackage(@RequestBody Package aPackage) {
        System.out.println(aPackage);
        Package packageCreate = packageService.create(aPackage);
        return new ResponseEntity<>(packageCreate, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Package> deletePackage(@PathVariable("id") Integer id) {
        Optional<Package> aPackage = packageService.findById(id);
        if (!aPackage.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            packageService.delete(id);
            return new ResponseEntity<>(aPackage.get(), HttpStatus.NO_CONTENT);
        }
    }
}
