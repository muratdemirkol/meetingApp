var React = require('react');
var Select = require('react-select');
var axios = require('axios');
var { Button, Modal, FormGroup, ControlLabel, FormControl } = require('react-bootstrap');


var UpdateEmployee = React.createClass({

  getInitialState: function(){
    return{
      updateObject:{
        id:'',
        name:'',
        surname:'',
        salary:'',
        department:{
          id:''
        }
      }
    }
  },

  render: function(){

    return(
      <Modal show={this.props.parent.state.showUpdateModal}>
        <Modal.Header>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="enter name"
                value={this.state.updateObject.name}
                onChange={this.onUpdateEmployeeNameChange}/>
              <br />

              <ControlLabel>Surname</ControlLabel>
              <FormControl
                type="text"
                placeholder="enter surname"
                value={this.state.updateObject.surname}
                onChange={this.onUpdateEmployeeSurnameChange}/>
              <br />

              <ControlLabel>Salary</ControlLabel>
              <FormControl
                type="text"
                placeholder="enter salary"
                value={this.state.updateObject.salary}
                onChange={this.onUpdateEmployeeSalaryChange}/>

              <br />
                  <ControlLabel>Department</ControlLabel>
                  <FormControl
                               placeholder="departments"
                               value={this.state.updateObject.department.id}
                               options={this.props.parent.getDepartmentOptions()}
                               onChange={this.onUpdateEmployeeDepartmentChange}/>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
					<Button onClick={this.props.parent.closeUpdateModal}>Close</Button>
					<Button bsStyle="primary" onClick={this.onUpdateBtnClicked}>Update</Button>
				</Modal.Footer>
      </Modal>
    );
  },

  fillUpdateObject: function() {

    	var selectedEmployee = this.props.parent.getEmployeeById(this.props.parent.state.selectedEmployeeId);

		this.state.updateObject = {
			id: selectedEmployee.id,
			name: selectedEmployee.name,
			surname: selectedEmployee.surname,
			salary: selectedEmployee.salary,
      department:{
        id: selectedEmployee.department.name
      }
		}
  },

  clearUpdateObject: function() {

		this.state.updateObject.id = '';
		this.state.updateObject.name = '';
		this.state.updateObject.surname = '';
		this.state.updateObject.salary = '';
		this.state.updateObject.department.id = '';
	},

  onUpdateEmployeeNameChange: function(event) {
		this.state.updateObject.name = event.target.value;
		this.forceUpdate();
	},

  onUpdateEmployeeSurnameChange: function(event) {
		this.state.updateObject.surname = event.target.value;
		this.forceUpdate();
	},

  onUpdateEmployeeSalaryChange: function(event) {
		this.state.updateObject.salary = event.target.value;
		this.forceUpdate();
	},

  onUpdateEmployeeDepartmentChange: function(event) {
  //  if(selection === null){
  //   this.state.updateObject.department.id = null;
  //  }else{
      this.state.updateObject.department.id = event.target.value;
  //  }
    this.forceUpdate();
  },
  onUpdateBtnClicked: function() {

		axios.put('http://localhost:9090/employee/update', this.state.updateObject)
			.then(function (response) {
				this.props.parent.closeUpdateModal();
				this.props.parent.refreshTable();
				console.log(response);
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	}
});

module.exports = UpdateEmployee;
