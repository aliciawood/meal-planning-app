if (module.hot) {  
	module.hot.accept();
}

import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/shell/Header';
import Main from './components/shell/Main';

class App extends React.Component {
  render () {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
  }
}

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
document.getElementById('app'));
