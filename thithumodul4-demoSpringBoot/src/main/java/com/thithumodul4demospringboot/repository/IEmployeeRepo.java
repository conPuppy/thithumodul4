package com.thithumodul4demospringboot.repository;

import com.thithumodul4demospringboot.model.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IEmployeeRepo extends PagingAndSortingRepository<Employee,Integer> {
}
