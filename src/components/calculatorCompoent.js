/**
 * Created by Thoughtworks on 16/8/27.
 */
import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'


class Input extends Component{
    render(){
        var styles = {
            input:{
                backgroundColor:'lightyellow',
                margin:2
            }
        }
        return <input style={styles.input} type="text" placeholder="请进行输入"/>
    }
}

class buttonData{
    constructor(content, flex, backgroundColor){
        this.content = content;
        this.flex = flex;
        this.backgroundColor = backgroundColor;
    }
}
class ButtonRow extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start',
            }
        }
        return (
            <div style={styles.container}>
                {
                    this.props.buttonDataArray.map((item, index)=>{
                        return <ButtonData content={item.content} flex={item.flex} backgroundColor ={item.backgroundColor} key={index}/>
                            })}
            </div>
        )
    }
}


class ButtonData extends Component{
    render(){
        var style = {
            flex:this.props.flex,
            paddingTop:3,
            paddingBottom:3,
            margin:2,
            backgroundColor:this.props.backgroundColor
        }
        return <button style={style}>{this.props.content}</button>
    }
}

export default  class calculatorCompoent extends Component{
    row1(){
        var row = [];
        row.push(new buttonData("7", 1, "lightgrey"))
        row.push(new buttonData("8", 1, "lightgrey"))
        row.push(new buttonData("9", 1, "lightgrey"))
        row.push(new buttonData("+", 1, "gold"))
        return row;
    }
    row2(){
        var row = [];
        row.push(new buttonData("4", 1, "lightgrey"))
        row.push(new buttonData("5", 1, "lightgrey"))
        row.push(new buttonData("6", 1, "lightgrey"))
        row.push(new buttonData("-", 1, "gold"))
        return row;
    }
    row3(){
        var row = [];
        row.push(new buttonData("1", 1, "lightgrey"))
        row.push(new buttonData("2", 1, "lightgrey"))
        row.push(new buttonData("3", 1, "lightgrey"))
        row.push(new buttonData("*", 1, "gold"))
        return row;
    }

    row4(){
        var row = [];
        row.push(new buttonData("0", 2, "lightgrey"))
        row.push(new buttonData("=", 1, "lightgrey"))
        row.push(new buttonData("/", 1, "gold"))
        return row;
    }
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'column',
                flex:1
            }
        }

        return (
            <div style={styles.container}>
                <Input/>
                <ButtonRow buttonDataArray={this.row1()}/>
                <ButtonRow buttonDataArray={this.row2()}/>
                <ButtonRow buttonDataArray={this.row3()}/>
                <ButtonRow buttonDataArray={this.row4()}/>
            </div>

        )
    }
}

module.exports = calculatorCompoent;