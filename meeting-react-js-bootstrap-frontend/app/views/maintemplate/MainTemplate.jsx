var React = require('react');
var Header = require('Header');
require('style!css!react-bootstrap-table/dist/react-bootstrap-table-all.min.css');
require('style!css!react-select/dist/react-select.min.css');
require('style!css!./index.css');
//require('style!css!bootstrap/dist/css/bootstrap.min.css');
//require('style!css!bootstrap/dist/css/bootstrap-theme.min.css');
//require('script!jquery/dist/jquery.min.js');
//require('script!bootstrap/dist/js/bootstrap.min.js');


var MainTemplate = React.createClass({

	render: function() {



		return (
			<div>
				<Header />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = MainTemplate;
