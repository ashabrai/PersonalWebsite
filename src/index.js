import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './component/app/app';
import createStore from './create-store';

const store = createStore;

// const rootNode = document.createElement('div');
// document.body.appendChild(rootNode);
// ReactDom.render(<Provider store={store}><App/></Provider>, rootNode);
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));