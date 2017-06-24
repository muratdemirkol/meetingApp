var React = require('react');
var Select = require('react-select');
var axios = require('axios');
var { Button, Modal, FormGroup, ControlLabel, FormControl }  = require('react-bootstrap');

var UpdateDepartment = React.createClass({

	getInitialState: function() {
		return {
			updateObject: {
				id: '',
				name: '',
				dsc: ''
			}
		}
    },

	render: function() {

		return (
			<Modal show={this.props.parent.state.showUpdateModal}>
				<Modal.Header>
					<Modal.Title>Update Department</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<ControlLabel>Department name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter name"
								value={this.state.updateObject.name}
								onChange={this.onUpdateDepartmentNameChange} />
							<br />

							<ControlLabel>Department description</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter description"
								value={this.state.updateObject.dsc}
								onChange={this.onUpdateDepartmentDescriptionChange} />
							<br />
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
    	var selectedDepartment = this.props.parent.getDepartmentById(this.props.parent.state.selectedDepartmentId);

		this.state.updateObject = {
			id: selectedDepartment.id,
			name: selectedDepartment.name,
			dsc: selectedDepartment.dsc
		}
	},
	clearUpdateObject: function() {
		this.state.updateObject.id = '';
		this.state.updateObject.name = '';
		this.state.updateObject.dsc = '';
	},

	//Input changes
	onUpdateDepartmentNameChange: function(event) {
		this.state.updateObject.name = event.target.value;
		this.forceUpdate();
	},
	onUpdateDepartmentDescriptionChange: function(event) {
		this.state.updateObject.dsc = event.target.value;
		this.forceUpdate();
	},
	onUpdateBtnClicked: function() {

		//Update Department
		axios.put('http://localhost:9090/department/update', this.state.updateObject)
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

module.exports = UpdateDepartment;
