var React = require('react')
var Input = React.createClass({
    getInitialState(){
        var value = ''
        var error = false;
        return {value, error};
    },
    onClick(){
        var value = this.refs.input.value;
        if (value == ''){
            var error = true;
            this.setState({error});
            return;
        }
        this.props.addItem(this.refs.input.value);
        this.refs.input.value = '';
    },
    showErr(){
        if (this.state.error){
            this.state.error = false;
            return <div style={{color:'red'}}>please input item info</div>
        }
    },
    render(){
        return (<div style={{margin:10, paddingLeft:10}}>
            <input type="text" placeholder="please input"  ref="input"/>
            <button style={{margin:10}} onClick={this.onClick}>add</button>
            {this.showErr()}
        </div>);
    }
});

module.exports = Input
