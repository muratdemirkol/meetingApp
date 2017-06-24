package tr.com.mebitech.dao.test;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import tr.com.mebitech.dao.interfaces.DepartmentDao;
import tr.com.mebitech.entity.Department;
import tr.com.mebitech.startapp.MeetingAppStarter;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {MeetingAppStarter.class})
public class DepartmentDaoTest {

		@Autowired
		private DepartmentDao departmentDao;
		
		@Test
		public void DepartmentCrudTest() {

			Department department = new Department();
			//insert test
			assertTrue(departmentDao.insert(department).getId() != 0);
			//update test
			department.setDsc("testDepartmentDaoUpdate");
			assertTrue(departmentDao.update(department).getDsc().equals("testDepartmentDaoUpdate"));
			//delete test
			assertTrue(departmentDao.delete(department));
	    }
		
}
