import React from 'react';
import {render} from 'react-dom';
import LeftRail from '../../components/shell/LeftRail';
import Recipes from '../Recipes/Recipes';

export default class Home extends React.Component {
  render () {
    return (
    	<div>
    		<h1> HOME! </h1>
    		<LeftRail/>
		    <div className={'main-content'}>
		    </div>
		</div>
   	);
  }
}