var LetterOne = React.createClass({displayName: "LetterOne",
	render:function(){
		return 'H'
	}
})
ReactDOM.render(React.createElement(LetterOne, null),document.getElementById('letter_one'))