var HelloWorld = React.createClass({
	getInitialState:function(){
		return {
			helloWorld:['H','e','l','l','o','W','o','r','l','d']
		}
	},
	render:function(){
		return (<div className="container">
		         {this.state.helloWorld.map(function(result){
		         	return <span>{result}</span>
		         })}
               </div>)
	}
})
ReactDOM.render(<HelloWorld/>,document.body)