import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App.js';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux'
import registerServiceWorker from '../src/registerServiceWorker';
//import '../src/semantic-ui-css/semantic.min.css' 
//import '../src/semantic.min.css'
//import './semantic/out/semantic.min.css'

import 'semantic-ui-css/semantic.min.css'

import '../src/index.css';

import peopleReducer from '../src/reducers/peopleReducer'
//import 'react-virtualized/styles.css';

//const store = createStore(peopleReducer,  /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(peopleReducer, /* preloadedState, */composeEnhancers( applyMiddleware(thunkMiddleware) ))

ReactDOM.render(
<Provider store={store} >
    <App />
</Provider>, document.getElementById('root')
);
registerServiceWorker();
