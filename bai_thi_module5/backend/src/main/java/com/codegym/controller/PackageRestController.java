package com.codegym.controller;

import com.codegym.entity.Package;
import com.codegym.service.IPackageService;
import com.codegym.validation.PackageValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
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
            , @PathVariable("size") Integer size
            , @RequestParam("product_id") Optional<String> idProduct
            , @RequestParam("endDate") Optional<String> endDate
            , @RequestParam("dateProduct1") Optional<String> dateProduct1
            , @RequestParam("dateProduct2") Optional<String> dateProduct2
    ) {
        Pageable pageable;
        Page<Package> packageList;

//        !endDate.get().isEmpty()

        if ((idProduct.isPresent() && !idProduct.get().isEmpty())
                || (endDate.isPresent() && !endDate.get().isEmpty())
                || ((dateProduct1.isPresent() && !dateProduct1.get().isEmpty()) && (dateProduct2.isPresent() && !dateProduct2.get().isEmpty()))) {
            pageable = PageRequest.of(page, size);
            if ((dateProduct1.isPresent() && !dateProduct1.get().isEmpty()) && (dateProduct2.isPresent() && !dateProduct2.get().isEmpty())) {
                packageList = packageService.search(idProduct.get(), endDate.get(), dateProduct1.get(), dateProduct2.get(), pageable);
            } else {
                packageList = packageService.search(idProduct.get(), endDate.get(), pageable);
            }
        } else {
            pageable = PageRequest.of(page, size);
            packageList = packageService.findAllPage(pageable);
        }
        return new ResponseEntity<>(packageList, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> createPackage(@Valid @RequestBody Package aPackage, BindingResult bindingResult) {
        PackageValidation packageValidation = new PackageValidation();
        packageValidation.validate(aPackage, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }

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

    @GetMapping("{id}")
    public ResponseEntity<Package> findCustomerById(@PathVariable Integer id) {
        Optional<Package> aPackage1 = packageService.findById(id);
        if (!aPackage1.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(aPackage1.get(), HttpStatus.OK);
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<Package> updatePackage(@PathVariable("id") Integer id, @RequestBody Package aPackage) {
        Optional<Package> aPackage1 = packageService.findById(id);
        if (!aPackage1.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            aPackage.setId(id);
            return new ResponseEntity<>(packageService.update(aPackage), HttpStatus.OK);
        }
    }
}
