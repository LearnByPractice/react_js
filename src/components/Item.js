var React = require('react')
var Item = React.createClass({
    remove(){
        this.props.remove(this.props.text);
    },
    setFilterByName(){
        this.props.setFilterByName(this.props.text, !this.props.filter);
    },
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
                paddingLeft:20
            },
            text:{
                width:100
            }
        };
        return (
            <li style={styles.container}>
                <div>
                    <input type="checkBox" checked={this.props.filter} onChange={this.setFilterByName}/>
                </div>
                <div style={styles.text}>
                    {this.props.text}
                </div>
                <button  style = {styles.item} onClick={this.remove}>remove</button>
            </li>);
    }
});
module.exports = Item;