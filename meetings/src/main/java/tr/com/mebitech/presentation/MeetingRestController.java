package tr.com.mebitech.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tr.com.mebitech.entity.Meeting;
import tr.com.mebitech.service.interfaces.MeetingService;

@RestController
@RequestMapping("meeting")
@CrossOrigin("*")
public class MeetingRestController {
	@Autowired
	private MeetingService meetingService;

	@RequestMapping(value="insert", method=RequestMethod.POST)
	@CrossOrigin("*")
	public Meeting insertMeeting(@RequestBody Meeting meeting) {
		return meetingService.insertMeeting(meeting);
	}

	@RequestMapping(value="update", method=RequestMethod.PUT)
	@CrossOrigin("*")
	public Meeting updateMeeting(@RequestBody Meeting meeting) {
		return meetingService.updateMeeting(meeting);
	}

	@RequestMapping(value="delete/{id}", method=RequestMethod.DELETE)
	public boolean deleteMeeting(@PathVariable("id") Long meetingId) {
		System.out.println(meetingId);
		Meeting meeting = new Meeting();
		meeting.setId(meetingId);
		System.out.println(meeting);
		return meetingService.deleteMeeting(meeting);
	}

	@RequestMapping(value="getall", method=RequestMethod.GET)
	@CrossOrigin("*")
	public List<Meeting> getAllMeeting() {
		List<Meeting> result = meetingService.getAllMeeting();
		return result;
	}
}
