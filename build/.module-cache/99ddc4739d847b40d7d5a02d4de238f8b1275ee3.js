var HelloWorld = React.createClass({displayName: "HelloWorld",
	getInitState:function(){
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