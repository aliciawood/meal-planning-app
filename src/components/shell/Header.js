import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './shell.css';

export default class Header extends React.Component {
  render () {
    return (
    	<div className={styles.header}>
    		<h1>HEADER</h1>
    	</div>
   	);
   	/*
		<header>
	    	<nav>
	    		<ul>
		        	<li><Link className={styles.links} to='/'>Home</Link></li>
		        	<li><Link className={styles.links} to='/mealschedule'>My Meal Schedule</Link></li>
		        	<li><Link className={styles.links} to='/grocerylist'>My GroceryList</Link></li>
		        	<li><Link className={styles.links} to='/pantry'>My Pantry</Link></li>
		      	</ul>
		    </nav>
	  	</header>
   	*/
  }
}