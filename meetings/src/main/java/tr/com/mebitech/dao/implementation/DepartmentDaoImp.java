package tr.com.mebitech.dao.implementation;

import java.util.List;

import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import tr.com.mebitech.dao.interfaces.DepartmentDao;
import tr.com.mebitech.entity.Department;
@Repository
public class DepartmentDaoImp extends BaseDaoImp implements DepartmentDao {

	@Override
	public Department insert(Department t) {
		return (Department)insertEntity(t);
	}

	@Override
	public Department update(Department t) {
		return (Department)updateEntity(t);
	}

	@Override
	public boolean delete(Department t) {
		t = (Department)deleteEntity(t);
		return t.isDeleted();
	}

	@Override
	public List<Department> getAllList() {
		String sql="select department from Department department where department.deleted=false";
		Query query= sessionFactory.openSession().createQuery(sql);
		return query.getResultList();
	}

}
