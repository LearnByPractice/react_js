/**
 * Created by Thoughtworks on 16/8/26.
 */


import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'

class TestBorder extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'column',
                backgroundColor:'gold',
                justifyContent:'flex-start',//默认值
                alignItems:'flex-start',
                margin:3
            },
            item:{
                backgroundColor:'bisque',
                marginTop:10,
                marginLeft:5,
                marginRight:5
            },
            item_end:{
                backgroundColor:'bisque',
                marginTop:10,
                marginLeft:5,
                marginRight:5,
                alignSelf:'flex-end'
            }
        }

        return <div style={styles.container}>
            <div style={styles.item}>item1</div>
            <div style={styles.item}>item2</div>
            <div style={styles.item_end}>submit</div>
        </div>
    }
}

class CommentItem extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'row',
                alignItems:'flex-start',//stretch也没有影响
                margin:2
            },
            picture:{
                backgroundColor:'gold',
                paddingRight:10
            },
            content:{
                display:'flex',
                flexDirection:'column',
                backgroundColor:'blue',
                flex:1,
                marginLeft:2,
                marginRight:2
            },
            basic:{
                display:'flex',
                flexDirection:'row',
                backgroundColor:'red',
                justifyContent:'space-between',
            },
            info:{
                marginLeft:3,
                marginRight:3,
            },
            comment:{
                display:'flex',
                flexDirection:'column',
                alignItems:'flex-Start',
            },
            commentItem:{
                backgroundColor:'darkseagreen',
                margin:3,
            },
            footer:{
                display:'flex',
                alignSelf:'flex-end',
                flexDirection:'row',
                backgroundColor:'darkseagreen',
                margin:3
            },
            footerItem:{
                marginLeft:3
            }
        }

        return <div style={styles.container}>
            <div style={styles.picture}>图片</div>
            <div style={styles.content}>
                <div style={styles.basic}>
                    <div style={styles.info}>名字</div>
                    <div style={styles.info}>刚刚</div>
                </div>
                <div style={styles.comment}>
                    <div style={styles.commentItem}>评论</div>
                    <div style={styles.commentItem}>图片</div>
                    <div style={styles.footer}>
                        <div style={styles.footerItem}>打赏</div>
                        <div style={styles.footerItem}>点赞</div>
                        <div style={styles.footerItem}>评论</div>
                    </div>
                </div>
            </div>
        </div>
    }
}


export default  class TestComponent extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flex:1,//撑开整个部分
                flexDirection:'column',
                marginTop:10,
                marginBottom:10,
                marginLeft:2,
                marginRight:2,
                backgroundColor:'darkseagreen',
                alignItems:'stretch',//默认
            }
        }
        return <div style={styles.container}>
                <div style= {{overflow: 'auto'}}>
                    <TestBorder/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                </div>
                <div style={{backgroundColor:'white', margin:5}}>
                    <input type="text" placeholder="请输入评论内容"/>
                </div>
        </div>
    }
}

module.exports = TestComponent;