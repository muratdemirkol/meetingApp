var React = require('react');
var Select = require('react-select');
var axios = require('axios');
var { Button, ButtonGroup, Glyphicon, Modal, FormGroup, ControlLabel, FormControl} = require('react-bootstrap');
var {BootstrapTable, TableHeaderColumn} = require('react-bootstrap-table');

var AddDepartmentModal = require('./AddDepartment');
var UpdateDepartmentModal = require('./UpdateDepartment');


var Department = React.createClass({

	getInitialState: function() {

		return {
			data: null,
			selectedDepartmentId: null,
			showAddModal: false,
			showUpdateModal: false
		}
    },

	componentDidMount: function() {
		this.refreshTable();
	},

	render: function() {

		var selectRowProp = {
			mode: "radio",
			clickToSelect: true,
			className: "selected-row",
			bgColor: 'rgb(101, 148, 255)',
			onSelect: this.onRowSelect
		};

		if(!this.state.data){
			return (<div></div>);
		}

		return (
			<div>
				<ButtonGroup className="m-10">
					<Button bsStyle="success" onClick={this.openAddModal}><Glyphicon glyph="plus" />Add</Button>
					<Button bsStyle="warning" disabled={this.state.selectedDepartmentId === null} onClick={this.openUpdateModal}><Glyphicon glyph="refresh" />Edit</Button>
					<Button bsStyle="danger" disabled={this.state.selectedDepartmentId === null} onClick={this.onDeleteBtnClicked}><Glyphicon glyph="trash" />Delete</Button>
				</ButtonGroup>

				<BootstrapTable data={this.state.data}
								striped={true}
								hover={true}
								search={true}
								selectRow={selectRowProp}>
					<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
					<TableHeaderColumn dataField="name" dataSort={true}>NAME</TableHeaderColumn>
					<TableHeaderColumn dataField="dsc">DESCRIPTON</TableHeaderColumn>

				</BootstrapTable>

				<AddDepartmentModal parent={this} ref="addDepartment" />
				<UpdateDepartmentModal parent={this} ref="updateDepartment"/>
			</div>
		);
	},


	onRowSelect: function(row, isSelected) {

		if(isSelected) {
			this.setState({ selectedDepartmentId: row.id });
		}else {
			this.setState({ selectedDepartmentId: null });
		}
	},


	closeAddModal: function() {
		this.setState({ showAddModal: false });
		this.refs.addDepartment.clearAddObject();
	},

	openAddModal: function() {
		this.refs.addDepartment.clearAddObject();
		this.setState({ showAddModal: true });
	},


	closeUpdateModal: function() {
		this.setState({showUpdateModal: false});
		this.refs.updateDepartment.clearUpdateObject();
	},

	openUpdateModal: function() {
		this.refs.updateDepartment.fillUpdateObject();
		this.setState({showUpdateModal: true});
	},


	onDeleteBtnClicked: function() {

		axios.delete('http://localhost:9090/department/delete/' + this.state.selectedDepartmentId)
			.then(function (response) {
				this.refreshTable();
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	},


	getDepartmentById: function(id) {

		for(var i in this.state.data) {
			if(this.state.data[i].id === id) {
				return this.state.data[i];
			}
		}
		return '';
	},


	refreshTable: function() {

		axios.get('http://localhost:9090/department/getall')
		.then(function (dep) {
			this.setState({data: dep.data});
		}.bind(this));
	}
});

module.exports = Department;
