class Product{
    constructor(name, price, count, id){
        this.name = name;
        this.price = price;
        this.count = count;
        this.id = id;
        this.checked = true;
    }
    increase(){
        return this.count += 1;
    }
    decrease(){
        return this.count -= 1;
    }
    getPrice(){
        if (this.checked == true){
            return this.price * this.count;
        }
        return 0;
    }
    chose(value){
        this.checked = value;
    }
}

class CartProductListData{
    constructor(productList, type){
        this.cartProductList = [];
        if (type == "convert"){
            this.cartProductList = productList.map((item)=>{return new Product(item.name, item.price, item.count, item.id)})
        }
    }
    clone(){
        return Object.assign({__proto__: this.__proto__}, this);
    }
    find(id){
        return this.cartProductList.find((item)=>{return item.id == id});
    }
    increase(id){
        var product = this.find(id);
        product.increase();
        return this;
    }
    decrease(id){
        var product = this.find(id);
        if (product.decrease() == 0){
            this.cartProductList = this.cartProductList.filter((item)=>{return item.id != id})
        }
        return this;
    }

    getCartProductList(){
        return this.cartProductList;
    }

    getTotalPrice(){
        var sum = 0;
        for (var item of this.cartProductList){
            sum += item.getPrice();
        }
        return sum;
    }
    checkAll(value){
        this.cartProductList.forEach((item)=>{
            item.chose(value);
        })
        return this;
    }
    getCheckAll(){
        //注意: of与in的用法不一样
        for (var item of this.cartProductList){
            console.log("item",item);
            if (item.checked === false){
                return false;
            }
        }
        return true;
    }
    chose(id){
        var product = this.find(id);
        console.log(product);
        product.chose(!product.checked);
        return this;
    }
    clearShoppingCart(){
        this.cartProductList = [];
        return this;
    }
}

var cartProductList = (state={}, action)=>{
    var shoppingCart = state;
    switch (action.type){
        case "cartProductList":
            return new CartProductListData(action.data, "convert");
        case "increase":
            return shoppingCart.clone().increase(action.id);
        case "decrease":
            return shoppingCart.clone().decrease(action.id);
        case "checkAll":
            return shoppingCart.clone().checkAll(action.value);
        case "chose":
            return shoppingCart.clone().chose(action.id);
        case "clearShoppingCart":
            return shoppingCart.clone().clearShoppingCart();
        default:
            return shoppingCart;
    }
}

module.exports = {cartProductList, CartProductListData, Product};