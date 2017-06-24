package tr.com.mebitech.dao.test;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import tr.com.mebitech.dao.interfaces.DepartmentDao;
import tr.com.mebitech.dao.interfaces.EmployeeDao;
import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.startapp.MeetingAppStarter;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {MeetingAppStarter.class})
public class EmployeeDaoTest {

		@Autowired
		private EmployeeDao employeeDao;
		
		@Test
		public void DepartmentCrudTest() {

			Employee employee = new Employee();
			//insert test
			assertTrue(employeeDao.insert(employee).getId() != 0);
			//update test
			employee.setName("testDepartmentDaoUpdate");
			assertTrue(employeeDao.update(employee).getName().equals("testDepartmentDaoUpdate"));
			//delete test
			assertTrue(employeeDao.delete(employee));
	    }
		
}
