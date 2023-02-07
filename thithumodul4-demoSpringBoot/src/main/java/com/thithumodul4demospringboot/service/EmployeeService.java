package com.thithumodul4demospringboot.service;

import com.thithumodul4demospringboot.model.Employee;
import com.thithumodul4demospringboot.repository.IEmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    IEmployeeRepo iEmployeeRepo;
    public Page<Employee> getPage(Pageable pageable) {
        return iEmployeeRepo.findAll(pageable);
    }
    public List<Employee> getList() {
        return (List<Employee>) iEmployeeRepo.findAll();
    }
    public Employee showEmployee(int id) {
        return iEmployeeRepo.findById(id).get();
    }
    public Employee createEmployee(Employee employee) {
        return iEmployeeRepo.save(employee);
    }
    public Employee editEmployee(Employee employee) {
       iEmployeeRepo.save(iEmployeeRepo.save(employee));
       return employee;
    }
    public Employee deleteEmployee(int id) {
        Employee employee = iEmployeeRepo.findById(id).get();
        iEmployeeRepo.delete(employee);
        return employee;
    }

}
