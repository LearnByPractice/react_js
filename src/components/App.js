/**
 * Created by Thoughtworks on 16/8/6.
 */

var React = require('react');
var {Component} = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var connectedComponent = require('./../redux/connectedComponent');

var styles = {
    container: {
        width:300,
        height:500,
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch'
    }
}

class App extends Component{
    renderFooter(){
        if (this.props.historyUrls.length == 0){
            return (
                <Footer/>
            )
        }
    }
    render(){
        return (
            <div style={styles.container}>
                <Header/>
                {this.props.children}
                {this.renderFooter()}
            </div>
        );
    }
}

module.exports = connectedComponent(App);