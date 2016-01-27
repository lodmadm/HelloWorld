var HelloWorld = React.createClass({displayName: "HelloWorld",
	render:function(){
		return React.createElement("div", {class: "container"}, 
   	  React.createElement("span", null, "H"), React.createElement("span", null, "e"), React.createElement("span", null, "l"), React.createElement("span", null, "l"), React.createElement("span", null, "o"), 
   	  React.createElement("span", null, "W"), React.createElement("span", null, "o"), React.createElement("span", null, "r"), React.createElement("span", null, "l"), React.createElement("span", null, "d")
   )
	}
})
ReactDOM.render(React.createElement(HelloWorld, null),document.body)