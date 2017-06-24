package tr.com.mebitech.dao.implementation;

import java.util.List;

import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import tr.com.mebitech.dao.interfaces.EmployeeDao;
import tr.com.mebitech.entity.Department;
import tr.com.mebitech.entity.Employee;

@Repository
public class EmployeeDaoImp extends BaseDaoImp implements EmployeeDao {

	@Override
	public Employee insert(Employee t) {
		return (Employee) insertEntity(t);
	}

	@Override
	public Employee update(Employee t) {
		return (Employee) updateEntity(t);
	}

	@Override
	public boolean delete(Employee t) {
		t = (Employee)deleteEntity(t);
		return t.isDeleted();
	}

	@Override
	public List<Employee> getAllList() {
		String sql="select employee from Employee employee where employee.deleted=false";
		Query query= sessionFactory.openSession().createQuery(sql);
		return query.getResultList();
	}

}
