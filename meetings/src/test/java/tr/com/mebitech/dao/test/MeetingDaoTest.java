package tr.com.mebitech.dao.test;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import tr.com.mebitech.dao.interfaces.MeetingDao;
import tr.com.mebitech.entity.Meeting;
import tr.com.mebitech.startapp.MeetingAppStarter;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {MeetingAppStarter.class})
public class MeetingDaoTest {

		@Autowired
		private MeetingDao meetingDao;
		
		@Test
		public void meetingCrudTest() {

			Meeting meeting = new Meeting();
			//insert test
			assertTrue(meetingDao.insert(meeting).getId() != 0);
			//update test
			meeting.setDsc("testMeetingDaoUpdate");
			assertTrue(meetingDao.update(meeting).getDsc().equals("testMeetingDaoUpdate"));
			//delete test
			assertTrue(meetingDao.delete(meeting));
	    }
		
}
