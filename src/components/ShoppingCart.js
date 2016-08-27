/**
 * Created by Thoughtworks on 16/8/6.
 */
var React = require('react')
var {Component} = React
var connectedComponent = require('../redux/connectedComponent')

var styles = {
    container:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        overflow:'auto',
    },
    productItem:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'darkgrey',
        marginTop:4,
        justifyContent:'space-between',
        minHeight:80,
    },
    productBasicInfo:{
        padding:10
    },
    calculator:{
        alignSelf:'flex-end',
        margin:10,
        width:60,
        display:'flex',
        flexDirection:'row',
    },
    calculatorItem:{
        color:'gold',
        textAlign:'center',
        flex:1
    },
    symbol:{
        backgroundColor:'deepskyblue',
        width:15,
        textAlign:'center'
    }
}

class Calculator extends Component{
    increase(){
        this.props.increase(this.props.id);
    }
    decrease(){
        this.props.decrease(this.props.id);
    }
    render(){
        return <div style={styles.calculator}>
            <span style={styles.symbol}  onClick={this.increase.bind(this)}>+</span>
            <span style={styles.calculatorItem}>{this.props.count}</span>
            <span style={styles.symbol} onClick={this.decrease.bind(this)}>-</span>
        </div>
    }
}



class ProductBasicInfo extends Component{
    chose(){
        this.props.chose(this.props.id);
    }
    render(){
        return (
            <div style={styles.productBasicInfo}>
                <div style={{padding:3}}>名称: {this.props.name}</div>
                <div style={{padding:3}}>价格: {this.props.price}</div>
                <div style={{padding:3}}>
                    <input type="checkBox" checked={this.props.checked} onChange={this.chose.bind(this)}/> 选择
                </div>
            </div>
        )
    }

}
class ProductItem extends Component{
    increase(id){
        this.props.increase(id);
    }
    decrease(id){
        this.props.decrease(id)
    }
    render(){
        return (
            <div style={styles.productItem}>
                <ProductBasicInfo name={this.props.name} price={this.props.price} checked={this.props.checked} id={this.props.id}
                                  chose={this.props.chose}/>
                <Calculator increase={this.increase.bind(this)}
                            decrease={this.decrease.bind(this)}
                            count={this.props.count} id={this.props.id}/>

            </div>
        )
    }
}

class Summarize extends  Component{
    checkAll(){
        this.props.checkAll(!this.props.checked);
    }
    submit(){
        this.props.submitOrder();
    }
    render(){
        console.log("summarize... ",this.props);
        var styles = {
            container:{
                display:'flex',
                flexDirection:'row',
                height:40,
                justifyContent:'space-around',
                alignItems:'center',
                backgroundColor:'beige'
            }
        }
        return (
                <div style={styles.container}>
                    <div>
                        <input type="checkBox" checked={this.props.checked} onChange={this.checkAll.bind(this)}/>全选
                    </div>
                    <div>合计: {this.props.totalPrice}元</div>
                    <button onClick={this.submit.bind(this)}>去结算</button>
                </div>);
    }

}

class ShoppingCart extends Component{
    /**
     * 页面到来前申请数据
     */
    componentWillMount(){
        this.props.actions.fetchCartProductList("src/data/shoppingCart.json");
    }
    increase(id){
        this.props.actions.increase(id);
    }
    decrease(id){
        this.props.actions.decrease(id);
    }
    chose(id){
        this.props.actions.chose(id);
    }
    checkAll(value){
        this.props.actions.checkAll(value);
    }
    submitOrder(){
        this.props.actions.submitOrder();
    }
    render(){
        var cartProductListData = this.props.cartProductList;
        var productList = cartProductListData.getCartProductList();
        return (
            <div style={{display:'flex', flex:1, flexDirection:'column'}}>
                <div style={styles.container}>
                    {productList.map((item, index)=>{
                        return <ProductItem {...item} increase={this.increase.bind(this)} key={index}
                                            decrease={this.decrease.bind(this)} chose={this.chose.bind(this)}/>
                    })}
                </div>
                <Summarize totalPrice = {cartProductListData.getTotalPrice()} checked={cartProductListData.getCheckAll()}
                           checkAll={this.checkAll.bind(this)} submitOrder={this.submitOrder.bind(this)}/>
            </div>
        )
    }
}

module.exports = connectedComponent(ShoppingCart)