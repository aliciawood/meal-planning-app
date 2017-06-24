import React from 'react';
import {render} from 'react-dom';
import RecipePreview from '../../components/core/RecipePreview';
import axios from 'axios';

export default class Recipes extends React.Component {

	constructor(props){
		super(props);
		console.log('Recipes props: ',props);
		this.recipeList = [];
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
	    // axios.get(`/api/recipes`)
     //  		.then(res => {
	    //     	console.log("result: ",res.data);
	    //     	this.recipeList = res.data;
	    //     	this.setState({loading: false});
	    //   	},err => {
	    //   		console.log("ERROR: ",err);			//do something to catch error here!
	    //   		this.setState({loading: false});
	    //   	});
  	}

	displayRecipes(){
		console.log("displayRecipes!");
		this.recipeList.forEach( recipe => {
			console.log("forEach - recipe: ",recipe);
			return (<RecipePreview recipe={recipe} />);
		});		
	}

  	render () {
    	return (
    		<div>
    			<div> Recipes </div>
    			{!this.state.loading  && this.displayRecipes()}
    			<RecipePreview recipe={this.recipeList[0]}/>
    			<RecipePreview recipe={this.recipeList[0]}/>
    			<RecipePreview recipe={this.recipeList[0]}/>
    			<RecipePreview recipe={this.recipeList[0]}/>
    			<RecipePreview recipe={this.recipeList[0]}/>
    			<RecipePreview recipe={this.recipeList[0]}/>
			</div>
   		);
  	}
}