package tr.com.mebitech.presentation;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import tr.com.mebitech.entity.Department;
import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.service.interfaces.EmployeeService;

@RestController
@RequestMapping("employee")
@CrossOrigin("*")
public class EmployeeRestController {
	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(value="insert", method=RequestMethod.POST)
	@CrossOrigin("*")
	public Employee insertEmployee(@RequestBody Employee employee) {
		return employeeService.insertEmployee(employee);
	}

	@RequestMapping(value="update", method=RequestMethod.PUT)
	@CrossOrigin("*")
	public Employee updateEmployee(@RequestBody Employee employee) {
		return employeeService.updateEmployee(employee);
	}

	@RequestMapping(value="delete/{id}", method=RequestMethod.DELETE)
	public boolean deleteEmployee(@PathVariable("id") Long employeeId) {
		Employee employee= new Employee();
		employee.setId(employeeId);
		return employeeService.deleteEmployee(employee);
	}

	
	@RequestMapping(value="getall", method=RequestMethod.GET)
	@CrossOrigin("*")
	@JsonDeserialize()
	public List<Employee> getAllEmployee() {
		return employeeService.getAllEmployee();
	}

}
