package tr.com.mebitech.dao.implementation;

import java.util.Calendar;
import java.util.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import tr.com.mebitech.entity.BaseEntity;

public class BaseDaoImp {
	@Autowired
	protected SessionFactory sessionFactory;
	
	protected BaseEntity insertEntity(BaseEntity baseEntity) {
		Session session= sessionFactory.openSession();
		session.beginTransaction();
		baseEntity.setDeleted(false);
		java.sql.Date sqlDate = new java.sql.Date(new Date().getTime());
		baseEntity.setInsertDttm(sqlDate);
		session.saveOrUpdate(baseEntity);
		session.getTransaction().commit();
		session.close();
		return baseEntity;
		
	}
	
	protected BaseEntity updateEntity(BaseEntity baseEntity) {
		Session session= sessionFactory.openSession();
		session.beginTransaction();
		java.sql.Date sqlDate = new java.sql.Date(new Date().getTime());
		baseEntity.setVersionDttm(sqlDate);
		session.saveOrUpdate(baseEntity);
		session.getTransaction().commit();
		session.close();
		return baseEntity;
		
	}
	
	protected BaseEntity deleteEntity(BaseEntity baseEntity) {
		Session session= sessionFactory.openSession();
		session.beginTransaction();
		baseEntity.setDeleted(true);
		java.sql.Date sqlDate = new java.sql.Date(new Date().getTime());
		baseEntity.setVersionDttm(sqlDate);
		session.saveOrUpdate(baseEntity);
		session.getTransaction().commit();
		session.close();
		return baseEntity;
		
	}
}
