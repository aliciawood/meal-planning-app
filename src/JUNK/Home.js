import React from 'react';
import {render} from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import styles from './home.css';

export default class Home extends React.Component {
	render () {
		return (
			<div className={styles.container}>
				<div className={styles.leftRail}>
					<Switch>
						<Route path='/grocerylist' component={GroceryList}/>
						
						<Route path='/mealschedule' component={Recipes}/>
					</Switch>
				</div>
				<div className={styles.main}>
					<Switch>
						<Route path='/grocerylist' component={GroceryList}/>
						
						<Route path='/mealschedule' component={MealSchedule}/>
					</Switch>
				</div>
			</div>
		);
	}
}