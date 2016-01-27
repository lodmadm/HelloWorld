var HelloWorld = React.createClass({
	getInitialState:function(){
		return {
			helloWorld:['H','e','l','l','o','W','o','r','l','d']
		}
	},
	componentDidMount:function(){
	},
	handleClick:function(e){
		
	},
	render:function(){
		return (<div className="container">
			     <div className="text-container">
		         {this.state.helloWorld.map(function(result){
		         	return <span onClick={this.handleClick}>{result}</span>
		         }.bind(this))}
		         </div>
               </div>)
	}
})
ReactDOM.render(<HelloWorld/>,document.body)