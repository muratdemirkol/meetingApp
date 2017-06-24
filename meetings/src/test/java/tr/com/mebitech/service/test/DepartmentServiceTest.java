package tr.com.mebitech.service.test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.instanceOf;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import tr.com.mebitech.service.implementation.DepartmentServiceImp;
import tr.com.mebitech.service.interfaces.DepartmentService;
import tr.com.mebitech.startapp.MeetingAppStarter;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {MeetingAppStarter.class})
public class DepartmentServiceTest {

		@Autowired
		private DepartmentService departmentService;
		
		@Test
		public void meetingServiceTest() {
			assertThat(departmentService,instanceOf(DepartmentServiceImp.class));
	    }
		
}


