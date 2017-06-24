var React = require('react');
var Select = require('react-select');
var axios = require('axios');
var { Button, ButtonGroup, Glyphicon, Modal, FormGroup, ControlLabel, FormControl} = require('react-bootstrap');
var {BootstrapTable, TableHeaderColumn} = require('react-bootstrap-table');

var AddEmployeeModal = require('./AddEmployee');
var UpdateEmployeeModal = require('./UpdateEmployee');

var Employee = React.createClass({

  getInitialState: function(){
    return{
      data: null,
      selectedEmployeeId: null,
      showAddModal: false,
      showUpdateModal: false,
      departments: null,
    }
  },

  componentDidMount: function(){
    this.refreshTable();
  },

  render: function(){

    var selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      className: "selected-row",
      bgColor: 'rgb(101, 148, 255)',
      onSelect: this.onRowSelect
    };

    if(!this.state.data){
      return(<div></div>);
    }

    return(
      <div>
        <ButtonGroup className="m-10">
          <Button bsStyle="success" onClick={this.openAddModal}><Glyphicon glyph="plus" />Add</Button>
          <Button bsStyle="warning" disabled={this.state.selectedEmployeeId === null} onClick={this.openUpdateModal}><Glyphicon glyph="refresh" />Edit</Button>
          <Button bsStyle="danger" disabled={this.state.selectedEmployeeId === null} onClick={this.onDeleteBtnClicked}><Glyphicon glyph="trash" />Delete</Button>
        </ButtonGroup>

        <BootstrapTable data={this.state.data}
                        striped={true}
                        hover={true}
                        search={true}
                        pagination={true}
                        selectRow={selectRowProp}
                        class="table table-hover">
          <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>NAME</TableHeaderColumn>
          <TableHeaderColumn dataField="surname">SURNAME</TableHeaderColumn>
          <TableHeaderColumn dataField="salary" dataFormat={this.priceFormatter}>SALARY</TableHeaderColumn>
          <TableHeaderColumn dataField="department" dataFormat={this.departmentFormatter}>DEPARTMENT</TableHeaderColumn>
        </BootstrapTable>

        <AddEmployeeModal parent={this} ref="addEmployee" />
        <UpdateEmployeeModal parent={this} ref="updateEmployee" />
      </div>
    );
  },
    onRowSelect: function(row, isSelected){
      if(isSelected){
        this.setState({selectedEmployeeId: row.id});
      }else{
        this.setState({selectedEmployeeId: null});
      }
    },

    getDepartmentOptions: function() {
		var options = [];

		options = this.state.departments.map(function(obj){
			var rObj = {};
			rObj['value'] = obj['id'];
			rObj['label'] = obj['name'];
			return rObj;
		});

		return options;
	},

    closeAddModal: function() {
      this.setState({ showAddModal: false });
      this.refs.addEmployee.clearAddObject();
    },

    openAddModal: function() {
		  this.refs.addEmployee.clearAddObject();
		  this.setState({ showAddModal: true });
	  },

    closeUpdateModal: function() {
		this.setState({showUpdateModal: false});
		this.refs.updateEmployee.clearUpdateObject();
	},
	openUpdateModal: function() {
		this.refs.updateEmployee.fillUpdateObject();
		this.setState({showUpdateModal: true});
	},

  onDeleteBtnClicked: function() {
		axios.delete('http://localhost:9090/employee/delete/'+this.state.selectedEmployeeId)
			.then(function (response) {
				this.refreshTable();
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	},

  priceFormatter: function(cell, row){
		return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
	},

  departmentFormatter: function(cell, row) {
    return this.getDepartmentName(row.department.id);
  },

  getDepartmentName: function(did) {

  for(var i in this.state.departments) {
    if(this.state.departments[i].id === did) {
      return this.state.departments[i].name;
    }
  }
  return '';
},

  getEmployeeById: function(id) {
		for(var i in this.state.data) {
			if(this.state.data[i].id === id) {
				return this.state.data[i];
			}
		}
		return '';
	},

	getEmployees: function() {
	  return axios.get('http://localhost:9090/employee/getall');
	},

  getDepartments: function() {
	  return axios.get('http://localhost:9090/department/getall');
	},

  refreshTable: function() {

		axios.all([this.getEmployees(),this.getDepartments()])
		.then(axios.spread(function (employees,dep) {
			this.setState({data: employees.data,
                    departments: dep.data});
		}.bind(this)));
  }
});

module.exports = Employee;
