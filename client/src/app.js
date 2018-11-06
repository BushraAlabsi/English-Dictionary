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
			console.log("success",data);
			this.setState({definition: data});
		}
 })

}

render(){
return (
<div className="container" >
	<h4>Dictionary</h4>
	<span>
		<button className= "word">Word</button>
		<input 
		type="text" 
		value={this.state.word} 
		onChange={ (e)=> {this.setState({word:e.target.value}) } }
		placeholder="Type an English word"
		/> <br/>

		<br/>
		<input 
		className="def"
		type="text" 
		value={this.state.definition}
		/>
	</span>
	<span className= "right">
		<button onClick= {() => {this.getDefinition()}}>Definition</button>
	</span>
</div> 
		
	)	
}
}

ReactDOM.render(<App />, document.getElementById('app'));