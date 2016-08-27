/**
 * Created by Thoughtworks on 16/8/7.
 */

var {combineReducers} = require('redux');

var productList = require('./productList')
var historyUrls = require('./historyUrls')

import { routerReducer as routing } from 'react-router-redux'
var {choseOptions} = require('./choseOptionsReduce')
var {cartProductList} = require('./cartProductList')
var {order} = require('./Order')
var {calculator} = require('./calculator')

const rootReducer = combineReducers({
    productList, historyUrls, routing, choseOptions, cartProductList, order, calculator
});

module.exports = rootReducer;

