var HelloWorld = React.createClass({displayName: "HelloWorld",
	getInitialState:function(){
		return {
			helloWorld:['H','e','l','l','o','W','o','r','l','d']
		}
	},
	render:function(){
		return (React.createElement("div", {className: "container"}, 
		         this.state.helloWorld.map(function(result){
		         	return React.createElement("span", {key: result.id}, result)
		         })
               ))
	}
})
ReactDOM.render(React.createElement(HelloWorld, null),document.body)