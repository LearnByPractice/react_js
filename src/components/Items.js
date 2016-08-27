/**
 * Created by Thoughtworks on 16/8/2.
 */

var Item = require('./Item')

var React = require('react')
var Items = React.createClass({
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'column',
                alignItems:'stretch',
            }
        };
        return (
            <div style={styles.container}>
                {
                    this.props.items.map((item, index)=>{
                        return <Item {...item} key={index} remove={this.props.remove}
                                     setFilterByName={this.props.setFilterByName}/>
                    })
                }
            </div>
        );
    }
});
module.exports = Items