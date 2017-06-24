import React from 'react';
import {render} from 'react-dom';
import styles from './core.css';

export default class RecipePreview extends React.Component {
	constructor(props){
		super(props);
		console.log("recipe constructor: ",props);
	}


  	render () {
 	   return (
    		<div className={styles.recipePreview}>
	    		<div className={styles.recipePreviewImgWrapper}>
	    			<img className={styles.recipePreviewImg} src="https://draxe.com/wp-content/uploads/2010/08/Chicken-Fajitas-Final-Shot.jpg" alt="Chicken Fajitas"/>
				</div>
				<div className={styles.recipePreviewText}>
					<div className={styles.recipePreviewTitle}>{this.props.recipeName}</div>
					Ratings
					<div className={styles.recipePreviewRatings}>
						<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
					</div>
				</div>
			</div>
   		);
  	}
}