var React = require('react');
var { Link } = require('react-router');

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<p className="header-info">
					MEBITECH PROJECT
				</p>
				<div className="menu">
					<Link  to="/employees" className="menu-link-item glyphicon glyphicon-user" activeClassName="active"> EMPLOYEE</Link>
					&emsp;
					<Link  to="/departments" className="menu-link-item glyphicon glyphicon-align-justify" activeClassName="active"> DEPARTMENT</Link>
					&emsp;
					<Link  to="/meetings" className="menu-link-item glyphicon glyphicon-th-list" activeClassName="active"> MEETING</Link>
		</div>
			</div>
		);
	}
});

module.exports = Header;
