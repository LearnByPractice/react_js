/**
 * Created by Thoughtworks on 16/8/27.
 */
import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'
var connectedComponent = require('../redux/connectedComponent')

var buttonMargin = 2;//按钮距离
var buttonSize = 1;//按钮大小

class Input extends Component{
    render(){
        var styles = {
            input:{
                backgroundColor:'lightyellow',
                margin:2,
                textAlign:'right'
            }
        }
        return <div style={styles.input}>
                 {this.props.result}
            </div>
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
                        return <ButtonData append={this.props.append}content={item.content} flex={item.flex} backgroundColor ={item.backgroundColor} key={index}/>
                            })}
            </div>
        )
    }
}


class ButtonData extends Component{
    append(){
        this.props.append(this.props.content);
    }
    render(){
        var styles = {
            buttonBox:{
                display:'flex',
                flex:this.props.flex,
                flexDirection:'column',
                alignItems:"stretch",
            },
            item:{
                backgroundColor:this.props.backgroundColor,
                margin:buttonMargin,
                padding:buttonSize,
            }
        }

        return (
                <div style={styles.buttonBox}>
                    <button style={styles.item} onClick={this.append.bind(this)} >{this.props.content}</button>
                </div>
            )
    }
}

class calculatorComponent extends Component{
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

    append(value){
        this.props.actions.append(value);
    }
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'column',
                flex:1,
                margin:10
            }
        }
        console.log("calculator.....", this.props);
        return (
            <div style={styles.container}>
                <div style={{textAlign:'center', backgroundColor:'deepskyblue', color:'white', padding:3}} onClick={this.props.actions.clear}>计算器</div>
                <Input result={this.props.calculator.result}/>
                <ButtonRow append = {this.append.bind(this)} buttonDataArray={this.row1()}/>
                <ButtonRow append = {this.append.bind(this)} buttonDataArray={this.row2()}/>
                <ButtonRow append = {this.append.bind(this)} buttonDataArray={this.row3()}/>
                <ButtonRow append = {this.append.bind(this)} buttonDataArray={this.row4()}/>
            </div>
        )
    }
}

module.exports = connectedComponent(calculatorComponent);