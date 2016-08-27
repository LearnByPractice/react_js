/**
 * Created by Thoughtworks on 16/8/6.
 */

var React = require('react')
var {Component} = require('react')
var connectedComponent = require('./../redux/connectedComponent')
var NavBar = require('./NavBar')
var style = {
    flex:1
}
class ShopInfo extends Component{
    render(){
        console.log("actions", this.props.actions);
        return (
            <div style={style}>
                <NavBar back={this.props.actions.popUrl}></NavBar>
                这是店铺的详情页
            </div>
        );
    }
}
module.exports = connectedComponent(ShopInfo);