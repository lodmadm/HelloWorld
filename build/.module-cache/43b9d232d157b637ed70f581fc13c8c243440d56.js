var HelloWorld = React.createClass({displayName: "HelloWorld",
	render:function(){
		return React.createElement("span", null, "H")
	}
})
ReactDOM.render(React.createElement(HelloWorld, null),document.body)