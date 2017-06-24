package tr.com.mebitech.service.interfaces;

import java.util.List;

import tr.com.mebitech.entity.Employee;
import tr.com.mebitech.entity.Meeting;

public interface MeetingService extends BaseService {
	Meeting insertMeeting(Meeting meeting);
	
	Meeting updateMeeting(Meeting meeting);
	
	boolean deleteMeeting(Meeting meeting);
	
	List<Meeting> getAllMeeting();
	
	
}
