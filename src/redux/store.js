import {applyMiddleware, compose, createStore } from 'redux';
var rootReducer = require('./rootReducer');

import thunk from 'redux-thunk'
import DevTools from './DevTools'

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
)

function createStoreWithMiddleware(initialState){
        return createStore(
            rootReducer,
            initialState,
            enhancer
    )
}

module.exports = createStoreWithMiddleware;
