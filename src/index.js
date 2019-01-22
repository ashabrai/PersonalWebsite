import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app/app';


// const rootNode = document.createElement('div');
// document.body.appendChild(rootNode);
// ReactDom.render(<Provider store={store}><App/></Provider>, rootNode);
ReactDOM.render(<App/>, document.getElementById('root'));