var HelloWorld = React.createClass({displayName: "HelloWorld",
	getInitialState:function(){
		return {
			helloWorld:['H','e','l','l','o','W','o','r','l','d']
		}
	},
	componentDidMount:function(){
		setTimeout(function(){
			this.setState({
				helloWorld:this.state.helloWorld.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;})
			})
		}.bind(this),100)
	},
	render:function(){
		return (React.createElement("div", {className: "container"}, 
			     React.createElement("div", {className: "text-container"}, 
		         this.state.helloWorld.map(function(result){
		         	return React.createElement("span", null, result)
		         })
		         )
               ))
	}
})
ReactDOM.render(React.createElement(HelloWorld, null),document.body)