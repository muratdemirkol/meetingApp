var React = require('react');
var Select = require('react-select');
var axios = require('axios');
var { Button, Modal, FormGroup, ControlLabel, FormControl }  = require('react-bootstrap');


var AddDepartment = React.createClass({

	getInitialState: function() {

		return {
			addObject: {
				id: '',
				name: '',
				dsc: ''
			}
		}
    },

	render: function() {

		return (
			<Modal show={this.props.parent.state.showAddModal}>
				<Modal.Header class="modal-header">
					<Modal.Title>Add Department</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<ControlLabel>Department name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Name"
								value={this.state.addObject.name}
								onChange={this.onAddDepartmentNameChange} />
							<br />

							<ControlLabel>Department description</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Description"
								value={this.state.addObject.dsc}
								onChange={this.onAddDepartmentDescriptionChange} />
							<br />
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
	onAddDepartmentNameChange: function(event) {
		this.state.addObject.name = event.target.value;
		this.forceUpdate();
	},

	onAddDepartmentDescriptionChange: function(event) {
		this.state.addObject.dsc = event.target.value;
		this.forceUpdate();
	},

	onAddBtnClicked: function() {

		//Save department
		axios.post('http://localhost:9090/department/insert', this.state.addObject)
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

module.exports = AddDepartment;
