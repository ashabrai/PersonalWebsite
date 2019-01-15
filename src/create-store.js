import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import mainReducer from './reducer/main-reducer';

import thunk from './middleware/redux-thunk';
import reduxReporter from './middleware/redux-reporter';

export default () => {
    return createStore(mainReducer, composeWithDevTools(applyMiddleware(reduxReporter, thunk)));
};
