var HelloWorld = React.createClass({displayName: "HelloWorld",
	getInitialState:function(){
		return {
			helloWorld:['H','e','l','l','o','W','o','r','l','d']
		}
	},
	componentDidMount:function(){
	},
	handleClick:function(e){
		alert()
	},
	render:function(){
		return (React.createElement("div", {className: "container"}, 
			     React.createElement("div", {onClick: this.handleClick, className: "text-container"}, 
		         this.state.helloWorld.map(function(result){
		         	return React.createElement("span", null, result)
		         })
		         )
               ))
	}
})
ReactDOM.render(React.createElement(HelloWorld, null),document.body)