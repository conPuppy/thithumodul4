package com.thithumodul4demospringboot.repository;

import com.thithumodul4demospringboot.model.Department;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IDepartmentRepo extends PagingAndSortingRepository<Department,Integer> {
}
