package com.codegym.validation;

import com.codegym.entity.Package;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class PackageValidation implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return Package.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        Package aPackage = (Package) target;

        if (aPackage.getIdPackage() == null) {
            errors.rejectValue("idPackage", "Id package không được để trống");
        }

        if (aPackage.getQuantity() == null) {
            errors.rejectValue("quantity", "Số lượng không được để trống");
        }

        if (aPackage.getDateProduct() == null) {
            errors.rejectValue("dateProduct", "Ngày Nhập hàng không được để trống");
        }

        if (aPackage.getStartDate() == null) {
            errors.rejectValue("startDate", "Ngày sản xuất không được để trống");
        }

        if (aPackage.getEndDate() == null) {
            errors.rejectValue("endDate", "Ngày hết hạn không được để trống");
        }

        if (aPackage.getProduct() == null) {
            errors.rejectValue("product", "id_product không được để trống");
        }
    }
}
