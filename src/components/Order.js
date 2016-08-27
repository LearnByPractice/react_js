import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'
var NavBar = require('../components/NavBar')
var connectedComponent  =  require('../redux/connectedComponent')

class Order extends Component{
    render(){
        console.log("order===============", this.props);
        var order = this.props.order;
        return (<div>
                    <NavBar/>
                    已经生成订单
                    订单总价钱: {order.totalPrice} 元
                </div>
            )
    }
}

module.exports = connectedComponent(Order);