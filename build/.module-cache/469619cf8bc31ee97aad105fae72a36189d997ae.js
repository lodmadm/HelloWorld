var HelloWorld = React.createClass({displayName: "HelloWorld",
	getInitialState:function(){
		return {
			helloWorld:['HelloWorld']
		}
	},
	render:function(){
		alert(this.state.helloWorld)
		return React.createElement("div", {className: "container"}
               )
	}
})
ReactDOM.render(React.createElement(HelloWorld, null),document.body)