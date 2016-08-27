/**
 * Created by Thoughtworks on 16/8/6.
 */

var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');
var actions = require('./actions');

var mapStateToProps = function (state) {
    var items = state.productList.items;
    var filter = state.productList.filter;
    var historyUrls = state.historyUrls;
    var choseOptions = state.choseOptions;
    var cartProductList = state.cartProductList;
    var order = state.order;
    return {
        items,
        filter,
        historyUrls,
        choseOptions,
        cartProductList,
        order
    };
};


var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

var connectedComponent =(component)=>{
    return connect(mapStateToProps, mapDispatchToProps)(component);
}


module.exports = connectedComponent