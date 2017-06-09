import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render () {
    return (
    	<div>
    		<header>
		    	<nav>
		    		<ul>
			        	<li><Link to='/'>Home</Link></li>
			        	<li><Link to='/schedule'>Schedule</Link></li>
			        	<li><Link to='/login'>Login</Link></li>
			      	</ul>
			    </nav>
		  	</header>
    	</div>
   	);
  }
}