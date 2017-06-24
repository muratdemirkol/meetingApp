package tr.com.mebitech.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="DEPARTMENT")
@SequenceGenerator(name="seqId",sequenceName="SEQ_DEPARTMENT")
public class Department extends BaseEntity {
	@Column(name="NAME")
	private String name;

	@Column(name="DSC")
	private String dsc;

	@OneToMany(mappedBy="department",fetch=FetchType.LAZY)
	@JsonIgnore
	private List<Employee> employeeList;
	
	@ManyToMany(mappedBy="departmentList")
	private List<Meeting> meetingList;

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
	public List<Employee> getEmployeeList() {
		return employeeList;
	}
	public void setEmployeeList(List<Employee> employeeList) {
		this.employeeList = employeeList;
	}

}
