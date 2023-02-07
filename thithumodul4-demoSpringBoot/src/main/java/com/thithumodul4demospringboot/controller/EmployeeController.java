package com.thithumodul4demospringboot.controller;

import com.thithumodul4demospringboot.model.Employee;
import com.thithumodul4demospringboot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping
    public List<Employee> showEmployees() {
        return employeeService.getList();
    }
    @GetMapping("/{id}")
    public Employee showEmployee(@PathVariable int id) {
        return employeeService.showEmployee(id);
    }
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }
    @PutMapping("/{id}")
    public Employee editEmployee(@RequestBody Employee employee) {
        return employeeService.editEmployee(employee);
    }
    @DeleteMapping("/{id}")
    public Employee deleteEmployee(@PathVariable int id) {
        return employeeService.deleteEmployee(id);
    }
}
