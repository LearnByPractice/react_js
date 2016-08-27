/**
 * Created by Thoughtworks on 16/8/6.
 */
var {hashHistory, Link} = require('react-router')

var React = require('react');
var {Component} = React


var styles = {
    item :{
        display:'fex',
        backgroundColor:'deepskyblue',
        flex:1,
        textAlign:'center',
        padding:10,
    },
}

class FootLink extends Component{
    constructor(props){
        super(props);
    }
    _jumpTo(){
        hashHistory.push(this.props.url);
    }
    _render(){
        var style = {
            color:'gold'
        };
        if (this.props.type == 'link') {
            return <Link to={this.props.url} style={style}>{this.props.name}</Link>;
        }else{
            return <a href="javascript:void(0)"  style={style} onClick={this._jumpTo.bind(this)}>{this.props.name}</a>
        }
    }
    render(){
        return (
            <div style={styles.item}>
                {this._render()}
            </div>
            )
    }
}
module.exports = FootLink;