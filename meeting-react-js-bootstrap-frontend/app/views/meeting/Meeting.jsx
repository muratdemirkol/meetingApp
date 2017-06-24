var React = require('react');
var Select = require('react-select');
var axios = require('axios');
var { Button, ButtonGroup, Glyphicon, Modal, FormGroup, ControlLabel, FormControl} = require('react-bootstrap');
var {BootstrapTable, TableHeaderColumn} = require('react-bootstrap-table');

var AddMeetingModal = require('./AddMeeting');
var UpdateMeetingModal = require('./UpdateMeeting');


var Meetings = React.createClass({

	getInitialState: function() {

		return {
			data: null,
			departments: null,
			selectedMeetingId: null,
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
					<Button bsStyle="success" onClick={this.openAddModal}><Glyphicon glyph="plus" />Ekle</Button>
					<Button bsStyle="warning" disabled={this.state.selectedMeetingId === null} onClick={this.openUpdateModal}><Glyphicon glyph="refresh" />Edit</Button>
					<Button bsStyle="danger" disabled={this.state.selectedMeetingId === null} onClick={this.onDeleteBtnClicked}><Glyphicon glyph="trash" />Delete</Button>
				</ButtonGroup>

				<BootstrapTable data={this.state.data}
								striped={true}
								hover={true}
								//pagination={true}
								search={true}
								selectRow={selectRowProp}>
					<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Meeting ID</TableHeaderColumn>
					<TableHeaderColumn dataField="name" dataSort={true}>NAME</TableHeaderColumn>
					<TableHeaderColumn dataField="dsc">DESCRIPTON</TableHeaderColumn>
				</BootstrapTable>

				<AddMeetingModal parent={this} ref="addMeeting" />
				<UpdateMeetingModal parent={this} ref="updateMeeting"/>
			</div>
		);
	},

	// Keep selected row
	onRowSelect: function(row, isSelected) {
		if(isSelected) {
			this.setState({ selectedMeetingId: row.id });
		}else {
			this.setState({ selectedMeetingId: null });
		}
	},

	// Department list for Select component
	getDepartmentOptions: function(departments) {
		var options = [];

		if(!departments) {
			return options;
		}

		options = this.state.departments.map(function(obj){
			var rObj = {};
			rObj['value'] = obj['id'];
			rObj['label'] = obj['name'];
			return rObj;
		});

		return options;
	},

	//Add modal open/close
	closeAddModal: function() {
		this.setState({ showAddModal: false });
		this.refs.addMeeting.clearAddObject();
	},

	openAddModal: function() {
		this.refs.addMeeting.clearAddObject();
		this.setState({ showAddModal: true });
	},

	//Update modal open/close
	closeUpdateModal: function() {
		this.setState({showUpdateModal: false});
		this.refs.updateMeeting.clearUpdateObject();
	},

	openUpdateModal: function() {
		this.refs.updateMeeting.fillUpdateObject();
		this.setState({showUpdateModal: true});
	},

	//BEGIN: Delete Meeting
	onDeleteBtnClicked: function() {

		axios.delete('http://localhost:9090/meeting/delete/' + this.state.selectedMeetingId)
			.then(function (response) {
				this.refreshTable();
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	},
	//END: Delete Meeting

	getMeetingById: function(id) {

		for(var i in this.state.data) {
			if(this.state.data[i].id === id) {
				return this.state.data[i];
			}
		}
		return '';
	},


	getMeetings: function() {
	  return axios.get('http://localhost:9090/meeting/getall');
	},

	getDepartments: function() {
	  return axios.get('http://localhost:9090/department/getall');
	},

	//Get table data and update the state to render
	refreshTable: function() {

		axios.all([this.getMeetings(), this.getDepartments()])
		.then(axios.spread(function (meetings, dep) {
			this.setState({data: meetings.data,
							departments: dep.data});
		}.bind(this)));
	}
});

module.exports = Meetings;
