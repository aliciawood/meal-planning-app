import React from 'react';
import {render} from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import Home from '../../scenes/Home/Home';
import Login from '../../scenes/Login/scenes/Login/Login';

export default class Main extends React.Component {
  render () {
    return (
    	<div>
    		<Switch>
		      <Route exact path='/' component={Home}/>
		      <Route path='/login' component={Login}/>
		    </Switch>
    	</div>
   	);
  }
}