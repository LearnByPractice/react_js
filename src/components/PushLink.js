/**
 * Created by Thoughtworks on 16/8/6.
 */

var React =require('react')
var {Component} = React

var {hashHistory} = require('react-router')

class PushLink extends Component{
    onClick(){
        hashHistory.push(this.props.nextUrl);
        this.props.pushUrl(this.props.currentUrl);
    }

    render(){
        return <a href="javascript:void(0)" style={this.props.style} onClick={this.onClick.bind(this)}>
            {this.props.name}</a>
    }
}

module.exports = PushLink;