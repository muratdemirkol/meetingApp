package tr.com.mebitech.service.interfaces;

import java.util.List;

import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.entity.Employee;

public interface EmployeeService extends BaseService {
	Employee insertEmployee(Employee employee);

	Employee updateEmployee(Employee employee);

	boolean deleteEmployee(Employee employee);

	List<Employee> getAllEmployee();
}
