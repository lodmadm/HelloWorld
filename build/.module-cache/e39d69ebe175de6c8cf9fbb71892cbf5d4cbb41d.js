var HelloWorld = React.createClass({displayName: "HelloWorld",
	getInitialState:function(){
		return {
			helloWorld:['H','e','l','l','o','W','o','r','l','d']
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