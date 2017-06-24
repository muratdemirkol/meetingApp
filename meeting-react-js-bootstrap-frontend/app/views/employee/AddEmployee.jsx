var React = require('react');
var Select = require('react-select');
var axios = require('axios');
var { Button, Modal, FormGroup, ControlLabel, FormControl }  = require('react-bootstrap');


var AddEmployee = React.createClass({
  getInitialState: function(){
    return{
      addObject: {
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
      <Modal show={this.props.parent.state.showAddModal}>
        <Modal.Header class="modal-header">
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl type="text"
                           placeholder="Enter Name"
                           value={this.state.addObject.name}
                           onChange={this.onAddEmployeeNameChange}/>
              <br />
              <ControlLabel>Surname</ControlLabel>
              <FormControl type="text"
                           placeholder="Enter Surname"
                           value={this.state.addObject.surname}
                           onChange={this.onAddEmployeeSurnameChange}/>
              <br />
              <ControlLabel>Salary</ControlLabel>
              <FormControl type="text"
                           placeholder="Enter Salary"
                           value={this.state.addObject.salary}
                           onChange={this.onAddEmployeeSalaryChange}/>
             <br />
               <ControlLabel>Department</ControlLabel>
               <Select type="text"
                            placeholder="Enter Department"
                            value={this.state.addObject.department.id}
                            options={this.props.parent.getDepartmentOptions()}
                            onChange={this.onAddEmployeeDepartmentChange}/>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
					<Button onClick={this.props.parent.closeAddModal}>Close</Button>
					<Button bsStyle="primary" onClick={this.onAddBtnClicked}>Add</Button>
				</Modal.Footer>
			</Modal>
    );
  },

  clearAddObject: function(){
		this.state.addObject.name = '';
		this.state.addObject.surname = '';
		this.state.addObject.salary = '';
    this.state.addObject.department = {id:''};
  },

	onAddEmployeeNameChange: function(event) {
		this.state.addObject.name = event.target.value;
		this.forceUpdate();
	},

  onAddEmployeeSurnameChange: function(event) {
		this.state.addObject.surname = event.target.value;
		this.forceUpdate();
	},

  onAddEmployeeSalaryChange: function(event) {
		this.state.addObject.salary = event.target.value;
		this.forceUpdate();
	},

  onAddEmployeeDepartmentChange: function(selection) {
    if(selection === null){
      this.state.addObject.department.id = null;
    }else{
      this.state.addObject.department.id = selection.value;
    }

    this.forceUpdate();
  },

  onAddBtnClicked: function() {

		axios.post('http://localhost:9090/employee/insert', this.state.addObject)
			.then(function (response) {
				this.props.parent.closeAddModal();
				this.props.parent.refreshTable();
				console.log(response);
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	}
});

module.exports = AddEmployee;
