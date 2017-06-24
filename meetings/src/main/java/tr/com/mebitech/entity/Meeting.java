package tr.com.mebitech.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name="MEETING")
@SequenceGenerator(name="seqId",sequenceName="SEQ_MEETING")
public class Meeting extends BaseEntity {
	@Column(name="NAME")
	private String name;
	
	@Column(name="DSC")
	private String dsc;

	@ManyToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinTable(name = "RL_MEETING_AND_DEPARTMENT",
					joinColumns = {@JoinColumn(name = "MEETING_ID" )},
					inverseJoinColumns = {@JoinColumn(name = "DEPARTMENT_ID")})
	private List<Department> departmentList;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDsc() {
		return dsc;
	}
	public void setDsc(String dsc) {
		this.dsc = dsc;
	}
	public List<Department> getDepartmentList() {
		return departmentList;
	}
	public void setDepartmentList(List<Department> departmentList) {
		this.departmentList = departmentList;
	}

}
