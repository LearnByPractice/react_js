/**
 * Created by Thoughtworks on 16/8/6.
 */
var React = require('react')
var {Component}= React

var style = {
    backgroundColor:'gold',
    padding:10,
    textAlign:'center',
}

class Header extends Component{
    render(){
        return (
            <div style={style}>
                welcome to use app
            </div>
        )
    }
}

module.exports = Header