/**
 * Created by Thoughtworks on 16/8/27.
 */

class CalculatorData{
    constructor(){
        this.result = "0";
        this.value = 0;
        this.symbol = undefined;
        this.startFlg = true;
    }
    clone(){
        return Object.assign({__proto__: this.__proto__}, this);
    }
    isDigital(value){
        return -1 != ["0","1","2","3","4","5","6","7","8","9"].findIndex((item)=>{
            return item == value;
        })
    }
    calc(value1, value2){
        switch (this.symbol){
            case "+":
                return value1 + value2;
            case "-":
                return value1 - value2
            case "*":
                return value1 * value2;
            case "/":
                return value1 / value2;
            default:
                break;
        }
    }
    append(value){
        if (this.isDigital(value)){
            if (this.result == "0" || this.startFlg){
                this.result = value;
                this.startFlg = false;
            }else{
                this.result += value;
            }
        }else{
            if (this.symbol == undefined){
                this.symbol = value;
                this.startFlg = true;
                this.value = this.result;
            }else{
                var result = this.calc(parseFloat(this.value), parseFloat(this.result));
                this.result = "" + result;
                this.symbol = undefined;
                this.startFlg = true;
            }
        }
        return this;
    }
    clear(){
        this.result = "0";
        this.value = 0;
        this.symbol = undefined;
        this.startFlg = true;
        return this;
    }
}

var calculator = (state={}, action)=>{
    console.log("calculator...", state);
    var  calculator = state;
    switch (action.type){
        case 'append':
            return calculator.clone().append(action.value);
        case 'clear':
            return calculator.clone().clear();
        default:
            return state;
    }
    return state;
}

module.exports = {calculator, CalculatorData};