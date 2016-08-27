class OrderData{
    constructor(productList, totalPrice){
        this.productList = productList;
        this.totalPrice = totalPrice;
    }
}

var order = function (state = {}, action) {
    switch (action.type){
        case "createOrder":
            return new OrderData(action.productList, action.totalPrice)
        default:
            return state;
    }
}

module.exports = {order, OrderData};