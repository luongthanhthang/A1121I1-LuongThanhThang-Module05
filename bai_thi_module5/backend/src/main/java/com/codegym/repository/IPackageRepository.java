package com.codegym.repository;

import com.codegym.entity.Package;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IPackageRepository extends JpaRepository<Package, Integer> {
    Page<Package> findAll(Pageable pageable);

    @Query(value = "select * from package where product_id like ?1 and end_date like ?2", nativeQuery = true)
    Page<Package> search(String idProduct, String endDate, Pageable pageable);
}
