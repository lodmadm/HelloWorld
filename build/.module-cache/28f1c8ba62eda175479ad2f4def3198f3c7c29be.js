var HelloWorld = React.createClass({displayName: "HelloWorld",
	getInitState:function(){
		return {
			helloWorld:['HelloWorld']
		}
	},
	render:function(){
		return React.createElement("div", {className: "container"}, 
   	             this.state.helloWorld.forEach(function(item,i){
   	             	return React.createElement("span", null, item)
   	             })
   	         
               )
	}
})
ReactDOM.render(React.createElement(HelloWorld, null),document.body)