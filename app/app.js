
'use strict';

var ReactDom = require('react-dom');
var React = require('react');

var App = React.createClass({

	render: () => {
		return <div> Hello World!</div>;

	}
});


ReactDOM.render( <App/>,$('root'));
