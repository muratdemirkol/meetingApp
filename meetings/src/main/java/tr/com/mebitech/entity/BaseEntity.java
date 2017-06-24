package tr.com.mebitech.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.SequenceGenerator;

/**
 * bu proje için gerekli olan tablolarýn tamamý
 * buradan extend eder. tasarýmsal olarak ortak alanlarýn tamamýnýn gitmesi 
 * için böyle bir tanýmlama yaptým.
 * 
 * Abstract olmasýndaki amaç baþka yerde newlenmesin.
 *
 */
@MappedSuperclass
public abstract class BaseEntity {
	@Id
	@GeneratedValue(generator="seqId",strategy=GenerationType.SEQUENCE)
	@Column(name="ID")
	protected long id;
	
	@Column(name="INSERT_DTTM")
	protected Date insertDttm;
	
	@Column(name="VERSION_DTTM")
	protected Date versionDttm;
	
	@Column(name="DELETED")
	protected boolean deleted;

	public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Date getInsertDttm() {
		return insertDttm;
	}
	public void setInsertDttm(Date insertDttm) {
		this.insertDttm = insertDttm;
	}
	public Date getVersionDttm() {
		return versionDttm;
	}
	public void setVersionDttm(Date versionDttm) {
		this.versionDttm = versionDttm;
	}


}
