var React = require('react');
var Select = require('react-select');
var axios = require('axios');
var { Button, Modal, FormGroup, ControlLabel, FormControl }  = require('react-bootstrap');

var AddMeeting = React.createClass({

	getInitialState: function() {

		return {
			addObject: {
				id: '',
				name: '',
				dsc: '',
				departmentList: [

				]
			}
		}
    },

	render: function() {

		if(this.props.parent.state.showAddModal === false){
			return (<div></div>);
		}

		return (
			<Modal show={this.props.parent.state.showAddModal}>
				<Modal.Header class="modal-header">
					<Modal.Title>Add Meeting</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<ControlLabel>Meeting name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Name"
								value={this.state.addObject.name}
								onChange={this.onAddMeetingNameChange} />
							<br />

							<ControlLabel>Meeting description</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Description"
								value={this.state.addObject.dsc}
								onChange={this.onAddMeetingDescriptionChange} />
							<br />

							<ControlLabel>Departments</ControlLabel>
							<Select
								name="departmentsField"
								multi={true}
								value={this.props.parent.getDepartmentOptions(this.state.addObject.departmentList)}
								options={this.props.parent.getDepartmentOptions(this.props.parent.state.departmentList)}
								onChange={this.onAddMeetingDepartmentChange} />
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

	clearAddObject: function() {

		this.state.addObject.id = '';
		this.state.addObject.name = '';
		this.state.addObject.dsc = '';
	},

	//Input changes
	onAddMeetingNameChange: function(event) {
		this.state.addObject.name = event.target.value;
		this.forceUpdate();
	},

	onAddMeetingDescriptionChange: function(event) {
		this.state.addObject.dsc = event.target.value;
		this.forceUpdate();
	},

	onAddMeetingDepartmentChange: function(selection) {

		if (selection === null) {
			alert(1);
			this.state.updateObject.departments = null;
		} else {
			var departments = selection.map(function(obj){
				var rObj = {};
				rObj['id'] = obj['value'];
				rObj['name'] = obj['label'];
				return rObj;
			});
			console.log(departments);

			this.state.addObject.departmentList = departments;
		}

		this.forceUpdate();
	},

	onAddBtnClicked: function() {

		//Save meeting
		console.log(this.state.addObject.departmentList);
		axios.post('http://localhost:9090/meeting/insert', this.state.addObject)
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

module.exports = AddMeeting;
