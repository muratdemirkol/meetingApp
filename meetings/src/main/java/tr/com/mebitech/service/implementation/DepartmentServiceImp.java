package tr.com.mebitech.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tr.com.mebitech.dao.interfaces.DepartmentDao;
import tr.com.mebitech.entity.Department;
import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.service.interfaces.DepartmentService;

@Service
public class DepartmentServiceImp implements DepartmentService {
	@Autowired
	private DepartmentDao departmentDao;
	@Override
	public Department insertDepartment(Department department) {
		return departmentDao.insert(department);
	}

	@Override
	public Department updateDepartment(Department department) {
		return departmentDao.update(department);
	}

	@Override
	public boolean deleteDepartment(Department department) {
		return departmentDao.delete(department);
	}

	@Override
	public List<Department> getAllDepartment() {
		return departmentDao.getAllList();
	}

}
