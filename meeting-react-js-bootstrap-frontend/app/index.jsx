var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, browserHistory, IndexRoute} = require('react-router');
var MainTemplate = require('MainTemplate');
var Employee = require('Employee');
var Department = require('Department');
var Meeting = require('Meeting');
var Deneme = require('./views/maintemplate/Deneme');
require('style!css!react-bootstrap-table/dist/react-bootstrap-table-all.min.css');
require('style!css!react-select/dist/react-select.min.css');
require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('style!css!bootstrap/dist/css/bootstrap-theme.min.css');
//require('script!jquery/dist/jquery.min.js');
//require('script!bootstrap/dist/js/bootstrap.min.js');
//require('react-bootstrap-table');


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={MainTemplate}>
				<Route path="employees" component={Employee} />
				<Route path="departments" component={Department} />
				<Route path="meetings" component={Meeting} />
				<IndexRoute component={Employee} />
		</Route>
	</Router>,
	document.getElementById('root')
);
