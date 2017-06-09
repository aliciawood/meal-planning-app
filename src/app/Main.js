import React from 'react';
import {render} from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Schedule from './Schedule';
import LoginHandler from './LoginHandler';

export default class Main extends React.Component {
  render () {
    return (
    	<div>
    		<Switch>
		      <Route exact path='/' component={Home}/>
		      <Route path='/schedule' component={Schedule}/>
		      <Route path='/login' component={LoginHandler}/>
		    </Switch>
    	</div>
   	);
  }
}