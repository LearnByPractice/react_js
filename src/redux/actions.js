var ActionKey = require('./actionkeys')
var fetcher = require('../util/fetcher')
var {hashHistory} = require('react-router')

var actions = {
    /**
     * 收到服务器过来的order
     * 1. 收到数据之后更新redux树的order分支, 同时清空redux树的shoppingcart分支
     * 2. 页面对应redux树的数据进行显示
     * @param url
     * @returns {function(*, *)}
     */
    submitOrder(url){
        return (dispatch, getState)=>{
            fetcher(url).then((data)=>{
                dispatch({type:"createOrder", totalPrice:10});
                dispatch({type:"clearShoppingCart"});
                hashHistory.push("/order");
            }).catch((error)=>{
                console.log(error);
            })
        }
    },

    /**
     * 申请购物车的数据
     * @param url
     * @returns {function(*, *)}
     */
    fetchCartProductList:function (url) {
        return (dispatch, getState)=>{
            fetcher(url).then((data)=>{
                console.log("=====fetchCartProductList=====", data);
                dispatch({type:"cartProductList", data:data})
            }).catch((error)=>{
                console.log(error);
            })
        }
    },

    addItem:function(text){
        return {
            type:ActionKey.ADD_TODO,
            text:text
        }
    },
    remove:function (text) {
        return {
            type:ActionKey.REMOVE_TODO,
            text:text
        }
    },
    setFilter:function (value) {
        return {
            type:ActionKey.SET_GLOBLE_FILTER,
            value:value
        }
    },
    setFilterByName:function (text, value) {
        return {
            type:ActionKey.SET_FILTER_BYNAME,
            text:text,
            value:value
        }
    },
    fetchProductList:function (url) {
        return (dispatch, getState)=>{
            fetcher(url)
                .then((data)=>{
                    var type = ActionKey.FETCH_FROM_SERVER
                    dispatch({data, type})
                })
                .catch((error)=>{
                    console.log("error",error);
                })
        }
    },
    pushUrl:function (url) {
        return {
            type:ActionKey.PUSH_URL,
            url:url
        }
    },
    popUrl:function () {
        return {
            type:ActionKey.POP_URL,
        }
    },
    choseType:function (index) {
        return {
            type:'type',
            value:index
        }
    },
    choseContent:function (index) {
        return {
            type:'content',
            value:index
        }
    },
    submit:function () {
        return (dispatch, getState)=>{
            fetcher("/src/data/package.json")
                .then((data)=>{
                    var state = getState()
                    console.log("submit response data",state.choseOptions);
                    var type = "submit"
                    hashHistory.push("/shop");
                    dispatch({type})
                })
                .catch((error)=>{
                    console.log("error",error);
                })
        }
    },
    increase:function (id) {
        return {
            type:"increase",
            id:id
        }
    },
    decrease:function (id) {
        return {
            type:'decrease',
            id:id
        }
    },
    checkAll:function(value){
        return {
            type:"checkAll",
            value:value
        }
    },
    chose:function(id){
        return {
            type:'chose',
            id:id
        }
    },
    append:function(value){
        return {
            type:'append',
            value:value
        }
    },
    clear:function () {
        return {
            type:'clear'
        }
    }
}


module.exports = actions;