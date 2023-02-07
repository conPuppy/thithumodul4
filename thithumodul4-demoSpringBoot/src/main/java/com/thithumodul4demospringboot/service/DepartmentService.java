package com.thithumodul4demospringboot.service;

import com.thithumodul4demospringboot.model.Department;
import com.thithumodul4demospringboot.repository.IDepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    IDepartmentRepo iDepartmentRepo;
    public List<Department> getAll() {
        return (List<Department>) iDepartmentRepo.findAll();
    }
}
