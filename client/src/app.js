import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {

constructor(){
	super();
	this.state = {
		word:'',
		definition:''
	}
}
getDefinition(){
 $.ajax({
		method: 'GET',
		url: `/definition/${this.state.word}`,
		success:  (data) => {
			alert("added successfully!")
			console.log("success",data);
			this.setState({definition: data});
		}
 })

}

render(){
return (
<div>
	<input 
	type="text" 
	value={this.state.word} 
	onChange={ (e)=> {this.setState({word:e.target.value}) } }
	placeholder="Type an English word"
	/> <br/>
<button onClick= {() => {this.getDefinition()}}>Definition</button>
<br/>
	<input 
	type="text" 
	value={this.state.definition}
	/>
</div>
		
	)	
}
}

ReactDOM.render(<App />, document.getElementById('app'));