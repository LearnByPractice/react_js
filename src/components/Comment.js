/**
 * Created by Thoughtworks on 16/8/26.
 */

import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'

class UserPicture extends Component{
    render(){
        return <div style={{width:50}}>
            picture
        </div>
    }
}

class BasicInfo extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'row',
            },
            itemName:{
                flex:1,
                textAlign:'left'
            },
            itemTime:{
                flex:1,
                textAlign:'right'
            }
        }
        return <div style={styles.container}>
            <div style={styles.itemName}>Alice</div>
            <div style={styles.itemTime}>刚刚</div>
        </div>
    }
}

class ResponseItem{
    render(){
        var style = {
            margin:10,
            backgroundColor:'gainsboro',
            padding:5
        }
        return (
            <div style={style}>
                <div>{this.props.index}</div>
                <div style={{marginLeft:10}}>
                    <div>tom</div>
                    <div>股票挺好滴</div>
                </div>
            </div>
        )
    }
}

class Response extends Component{
    render(){
        return <div>
            <ResponseItem index={0}/>
            <ResponseItem index={1}/>
        </div>
    }
}

class CommentFooter extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-end',
                backgroundColor:'gold',
                color:'red',
            },
            item:{
                marginRight:10,
            }
        }
        return (
            <div style={styles.container}>
                <div style={styles.item}>点赞</div>
                <div style={styles.item}>评价</div>
            </div>
        )
    }
}

class CommentItem extends Component{

    render(){
        var styles = {
            container:{
                display:'flex',
                flex:1,
                flexDirection:'column',
            },
            content:{
                backgroundColor:'cadetblue'
            }
        }
        return (
            <div style={styles.container}>
                <div>
                    <BasicInfo/>
                </div>
                <div style={styles.content}>
                    Alice的评论: 股票挺好的。
                </div>
                <Response/>
                <CommentFooter/>
            </div>
        );
    }
}


class SingleComment extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'row',
                margin:10,
                backgroundColor:'beige',
                padding:3
            }
        }
        return (<div style={styles.container}>
                <UserPicture/>
                <CommentItem/>
            </div>)
    }
}

class CommentTable extends Component{
    render(){
        var styles = {
            container:{
                flex:1,
                display:'flex',
                flexDirection:'column',
                overflow:'auto',
                margin:10
            }
        }
        return (<div style={styles.container}>
            <div>
                <SingleComment/>
                <SingleComment/>
            </div>
        </div>)
    }
}

module.exports = CommentTable;