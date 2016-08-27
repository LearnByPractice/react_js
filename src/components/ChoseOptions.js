
import React from 'react'
import {Component} from 'react'

var connectedComponent = require('../redux/connectedComponent')

class ChoseItem extends Component{
    chose(){
        this.props.chose(this.props.index);
    }
    render(){
        var color = this.props.color;
        var itemStyle = {
            textAlign:'center',flex:1, color:color
        }
        return <span onClick={this.chose.bind(this)} style={itemStyle}>{this.props.name}</span>
    }
}

var g_styles = {
    container:{display:'flex', flex:1, flexDirection:'column', backgroundColor:'cornflowerblue'},
    bottonStyle:{alignSelf:'flex-center',margin:10, color:'indigo'},
    choseContent:{display:'flex', flexDirection:'row'}
};


class ChoseItems extends Component{
    chose(index){
        this.props.chose(index);
    }
    render(){
        var containerStyle = {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-round',
            margin:10,
        }
        var choseOptionsData = this.props.choseOptions;
        return (
            <div style={containerStyle}>
                <ChoseItem index={0} chose={this.chose.bind(this)} color={choseOptionsData.getTypeColor(0)} name={choseOptionsData.getName(0)}/>
                <ChoseItem index={1} chose={this.chose.bind(this)} color={choseOptionsData.getTypeColor(1)} name={choseOptionsData.getName(1)}/>
            </div>
        );
    }
}

class ChoseOptions extends Component{
    chose(index){
        this.props.actions.choseType(index);
    }
    submit(){
        this.props.actions.submit();
    }
    render(){
        var choseOptionsData = this.props.choseOptions;
        return (
            <div style={g_styles.container}>
                <ChoseItems choseOptions = {choseOptionsData} chose={this.chose.bind(this)}/>
                <button style={g_styles.bottonStyle} onClick={this.submit.bind(this)}>投注</button>
            </div>)
    }
}

module.exports = connectedComponent(ChoseOptions);
