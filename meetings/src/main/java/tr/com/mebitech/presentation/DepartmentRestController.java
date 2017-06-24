package tr.com.mebitech.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import tr.com.mebitech.entity.Department;
import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.service.interfaces.DepartmentService;

@RestController
@RequestMapping("department")
@CrossOrigin("*")
public class DepartmentRestController {
	@Autowired
	private DepartmentService departmentService;
	
	@RequestMapping(value="insert", method=RequestMethod.POST)
	@CrossOrigin("*")
	public Department insertDepartment(@RequestBody Department Department) {
		return departmentService.insertDepartment(Department);
	}

	@RequestMapping(value="update", method=RequestMethod.PUT)
	@CrossOrigin("*")
	public Department updateDepartment(@RequestBody Department department) {
		return departmentService.updateDepartment(department);
	}

	@RequestMapping(value="delete/{id}", method=RequestMethod.DELETE)
	public boolean deleteDepartment(@PathVariable("id") Long departmentId) {
		Department department= new Department();
		department.setId(departmentId);
		return departmentService.deleteDepartment(department);
	}
	
	@RequestMapping(value="getall", method=RequestMethod.GET)
	@CrossOrigin("*")
	public List<Department> getAllDepartment() {
		return departmentService.getAllDepartment();
	}
}
