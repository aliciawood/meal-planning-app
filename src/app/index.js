if (module.hot) {  
	module.hot.accept();
}

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello Alicia!</p>;
  }
}

render(<App/>, document.getElementById('app'));