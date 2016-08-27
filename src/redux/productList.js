
var ActionKey = require('./actionkeys');
var ItemData = require('../data/ItemData');

function compositeItems(items){
    return {
            items
        }
}

function compoisteProductList(items, filter) {
    return {
        items,
        filter
    }
}

var addAndRemove = (state=[], action)=>{
    var items = state;
    switch (action.type){
        case ActionKey.ADD_TODO:
            return [new ItemData(action.text), ...items];

        case ActionKey.REMOVE_TODO:
           return items.filter((item)=>{
                return item.text != action.text;
            })
        default:
            return state
    }
}


var setFilter = (state={items:[], filter:false}, action)=>{

    switch (action.type){
        case ActionKey.SET_GLOBLE_FILTER: {
            function setAllItems(value, oldItems){
                return oldItems.map((item)=>{
                    var filter= value;
                    return Object.assign({}, item, {filter});
                })
            }
            return compoisteProductList(
                    setAllItems(action.value, state.items), action.value);
        }

        case ActionKey.SET_FILTER_BYNAME:
        {
            function setSingleFilter(text, value, state) {
                var items = state.items.map((item)=>{
                    if (item.text == text){
                        var filter = value;
                        return Object.assign({}, item, {filter});
                    }else{
                        return item;
                    }
                });
                var findFalse = (undefined != items.find((item)=>{
                    return item.filter === false;
                }));
                return compoisteProductList(items, !findFalse)
            }

            return setSingleFilter(action.text, action.value, state);
        }
        default:
            return state;
    }
}

var productList = function (state={items:[], filter:false}, action) {
    var productList = state;
    switch (action.type){
        case ActionKey.ADD_TODO:
        case ActionKey.REMOVE_TODO:
            return Object.assign({},productList, compositeItems(addAndRemove(state.items, action)));

        case ActionKey.FETCH_FROM_SERVER:
                return action.data;
        case ActionKey.SET_GLOBLE_FILTER:
        case ActionKey.SET_FILTER_BYNAME:
            return Object.assign({}, productList, setFilter(productList, action));
        default:
            return productList;
        }
}

module.exports = productList;