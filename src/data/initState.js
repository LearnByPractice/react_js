/**
 * Created by Thoughtworks on 16/8/8.
 */

var {CartProductListData} = require('../redux/cartProductList')
var {OrderData} = require('../redux/Order')
var {ChoseOptionsData} = require('../redux/choseOptionsReduce')
var {CalculatorData} = require('../redux/calculator')

function initState(){
    var items = [];
    var filter = true;
    var productList = {items, filter};
    var historyUrls = [];
    var choseTypeNo = 0;
    var choseContentNo = 0;
    var choseOptions = new ChoseOptionsData();
    var cartProductList = new CartProductListData();
    var order = new OrderData([], 0);
    var calculator = new CalculatorData();
    return {productList, historyUrls, choseOptions, cartProductList, order, calculator}
}

module.exports = initState