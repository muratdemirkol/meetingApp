package tr.com.mebitech.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tr.com.mebitech.dao.interfaces.MeetingDao;
import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.entity.Meeting;
import tr.com.mebitech.service.interfaces.MeetingService;

@Service
public class MeetingServiceImp implements MeetingService {
	@Autowired
	private MeetingDao meetingDao;
	@Override
	public Meeting insertMeeting(Meeting meeting) {
		return meetingDao.insert(meeting);
	}

	@Override
	public Meeting updateMeeting(Meeting meeting) {
		return meetingDao.update(meeting);
	}

	@Override
	public boolean deleteMeeting(Meeting meeting) {
		return meetingDao.delete(meeting);
	}

	@Override
	public List<Meeting> getAllMeeting() {
		return meetingDao.getAllList();
	}

}
