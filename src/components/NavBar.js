/**
 * Created by Thoughtworks on 16/8/6.
 */
var React = require('react')
var {Component} = React
var {hashHistory} = require('react-router')

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    onBack(){
        hashHistory.goBack();
        if (this.props.back != undefined){
            this.props.back();
        }
    }
    render(){
        return <div onClick={this.onBack.bind(this)}>返回</div>
    }
}

module.exports = NavBar;