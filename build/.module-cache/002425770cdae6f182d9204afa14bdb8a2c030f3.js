var HelloWorld = React.createClass({displayName: "HelloWorld",
	render:function(){
		return React.createElement("span", null, "H")
	}
})
ReactDOM.render(React.createElement(LetterOne, null),document.getElementById('letter_one'))