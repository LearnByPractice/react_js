/**
 * Created by Thoughtworks on 16/8/2.
 */

var React = require('react');
var {Component} = React
var Input = require('./Input')


var Items = require('./Items')
var FootLink = require('./FootLink')
var PushLink = require('./PushLink')

require('./test.css')


var connectedComponent = require('./../redux/connectedComponent')

const url = "/src/data/package.json";

class Shop extends Component{
    setFilter(){
        this.props.actions.setFilter(!this.props.filter);
    }
    fetchProductList(){
        this.props.actions.fetchProductList(url);
    }
    render() {
        var items = this.props.items;
        return (
            <div style={styles.container} className="container">
                <PushLink currentUrl={"/shop"} nextUrl={"/shopInfo"} name="详情" pushUrl={this.props.actions.pushUrl}/>
                <Input addItem={this.props.actions.addItem}/>
                <Items {...{items}} setFilterByName = {this.props.actions.setFilterByName} remove={this.props.actions.remove}/>
                <div>
                    <input style={styles.checkBox} type="checkBox" checked ={this.props.filter}
                           onChange={this.setFilter.bind(this)} />
                    全选
                </div>
                <button onClick={this.fetchProductList.bind(this)}>重新获取</button>
            </div>
        );
    }
}

var styles = {
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch'
    },
    checkBox:{
        marginLeft:10
    }
}

module.exports = connectedComponent(Shop)