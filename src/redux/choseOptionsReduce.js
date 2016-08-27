class ChoseOptionsData{
    constructor(){
        this.optionName = ["猜涨","猜跌"]
        this.choseTypeNo = 0;
        this.choseColor = 'red';
        this.noChoseColor = 'black';
    }

    clone(){
        return Object.assign({__proto__: this.__proto__}, this);
    }
    //action 关联type:type
    chose(index){
        this.choseTypeNo = index;
        return this;
    }

    getName(index){
        return this.optionName[index];
    }

    getTypeColor(index){
        if (index == this.choseTypeNo){
            return this.choseColor;
        }else{
            return this.noChoseColor;
        }
    }
}

var choseOptions = (state={}, action)=>{
    var choseOptionsData = state;
    console.log("choseOptionsData", choseOptionsData);
    switch (action.type){
        case "type":
            return choseOptionsData.clone().chose(action.value);
        case "submit":
            var choseContentNo = 0;
            var choseTypeNo = 0;
            return Object.assign({}, state, {choseContentNo, choseTypeNo});
        default:
            return state;
    }
}

module.exports = {ChoseOptionsData, choseOptions};