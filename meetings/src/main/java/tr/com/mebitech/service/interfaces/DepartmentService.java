package tr.com.mebitech.service.interfaces;

import java.util.List;

import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.entity.Department;

public interface DepartmentService extends BaseService {
	Department insertDepartment(Department department);

	Department updateDepartment(Department department);

	boolean deleteDepartment(Department department);

	List<Department> getAllDepartment();
}
