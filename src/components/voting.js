import React,{Component} from 'react';
import '../App.css';

class Voting extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			vote : [
				{name: "Trash", votes: 0},
				{name: "Trash", votes: 0},
			
			]
		}
	}

	vote (i) {
		let newVote = [...this.state.vote];
		newVote[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({vote: newVote});
		
	}

	render(){
		return(
			<>
<h3>Play Smash or Trash</h3>
<p>Click Smash if it's a jam and Trash for you know...</p>
<div className="d-flex flex-row justify-content-evenly">
					{
						this.state.star.map((vote, i) => 
		<div key={i}>
            <button  className="btn btn-lg btn-outline-warning" onClick={this.vote.bind(this, i)}> { vote.name + vote.votes }</button>
	    </div>
	)}
	</div>
        </>
	);
	}
}
export default Voting;