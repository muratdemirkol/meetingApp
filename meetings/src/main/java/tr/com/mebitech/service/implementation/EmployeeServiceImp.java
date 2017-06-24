package tr.com.mebitech.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tr.com.mebitech.dao.interfaces.EmployeeDao;
import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.service.interfaces.EmployeeService;

@Service
public class EmployeeServiceImp implements EmployeeService {
	@Autowired
	private EmployeeDao employeeDao;
	@Override
	public Employee insertEmployee(Employee employee) {
		return employeeDao.insert(employee);
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		return employeeDao.update(employee);
	}

	@Override
	public boolean deleteEmployee(Employee employee) {
		return employeeDao.delete(employee);
	}

	@Override
	public List<Employee> getAllEmployee() {
		return employeeDao.getAllList();
	}

}
