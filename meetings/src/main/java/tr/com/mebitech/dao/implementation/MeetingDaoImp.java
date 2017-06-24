package tr.com.mebitech.dao.implementation;

import java.util.List;

import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import tr.com.mebitech.dao.interfaces.MeetingDao;
import tr.com.mebitech.entity.Meeting;

@Repository
public class MeetingDaoImp extends BaseDaoImp implements MeetingDao {

	@Override
	public Meeting insert(Meeting t) {
		return (Meeting) insertEntity(t);
	}

	@Override
	public Meeting update(Meeting t) {
		return (Meeting) updateEntity(t);
	}

	@Override
	public boolean delete(Meeting t) {
		t = (Meeting) deleteEntity(t);
		return t.isDeleted();
	}

	@Override
	public List<Meeting> getAllList() {
		String sql="select meeting from Meeting meeting where meeting.deleted=false";
		Query query= sessionFactory.openSession().createQuery(sql);
		return query.getResultList();
	}

}
