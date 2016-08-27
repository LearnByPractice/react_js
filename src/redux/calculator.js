/**
 * Created by Thoughtworks on 16/8/27.
 */

/**
 * 概述:这样一来代码就很简单了,界面只是对于data的调用,data的变化会反应到view上面
 * 1. 其中类的数据this.result反应到了界面上
 * 2. 其他数据用来进行计算的
 */
class CalculatorData{
    constructor(){
        this.init();
    }
    init(){
        this.result = "0";
        this.preValue = 0;
        this.symbol = undefined;
        this.startFlg = true;
    }
    clone(){
        return Object.assign({__proto__: this.__proto__}, this);
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
        function isDigital(value){
            return -1 != ["0","1","2","3","4","5","6","7","8","9"].findIndex((item)=>{
                    return item == value;
                })
        }

        if (isDigital(value)){
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
                this.preValue = this.result;
            }else{
                var result = this.calc(parseFloat(this.preValue), parseFloat(this.result));
                this.result = "" + result;
                this.symbol = undefined;
                this.startFlg = true;
            }
        }
        return this;
    }
    clear(){
        this.init();
        return this;
    }
}

var calculator = (state={}, action)=>{
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