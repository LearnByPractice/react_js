/**
 * Created by Thoughtworks on 16/8/27.
 */

import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'



var leftRightMargin =  3

class DiamondTable extends Component {
    render(){
        var contents1 = ["1","2","5"];
        var contents2 = ["10","20","自定义数额"];
        return (<div>
            <DiamondRow contents = {contents1}/>
            <DiamondRow contents = {contents2}/>
        </div>);
    }
}


class DiamondItem extends Component{
    showContent(){
        if (this.props.content == "自定义数额"){
            return (<div>{this.props.content}</div>);
        }else{
            return (
                <div>
                    <span>钻石</span>
                    <span> {this.props.content}</span>
                </div>
            )
        }
    }
    render(){
        var styles = {
            diamondItem:{
                display:'flex',
                flex:1,
                border:5,
                margin:leftRightMargin,
                background:'grey',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                color:'gold'
            },
        }

        return (
            <div style={styles.diamondItem}>
                {this.showContent()}
            </div>
        );
    }
}

class DiamondRow extends  Component{
    render(){
        var styles = {
            diamondsContainer:{
                display:'flex',
                flexDirection:'row',
                height:40,
            },

        }
        return (
            <div style={styles.diamondsContainer}>
                <DiamondItem content={this.props.contents[0]}/>
                <DiamondItem content={this.props.contents[1]}/>
                <DiamondItem content={this.props.contents[2]}/>
            </div>
        );
    }
}

class DiamondTitle extends Component{

    render(){
        var styles = {
            presentTitle:{
                textAlign:'left',
                marginTop:10,
                margin:leftRightMargin,
                backgroundColor:'lightgrey'
            }
        }
        return  (<div style={styles.presentTitle}>
            选择打赏数量
        </div>);
    }
}



class PresentButton extends Component{
    render(){
        var styles = {
            button:{
                display:'flex',
                flexDirection:'column',
                alignItems:'stretch',
                marginTop:10,
                marginLeft:3,
                marginRight:3,
            }
        }
        return (
            <div style={styles.button}>
                <button>确认打赏</button>
            </div>
        );
    }
}


class StarItem extends Component{
    render(){
        var styles = {
            content:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                marginTop:2,
                marginBottom:2,
                backgroundColor:'cornsilk',
            },
            picture:{
                marginRight:10
            },
            info:{
                flex:1
            },
        }
        return (
            <div style={styles.content}>
                <div style={styles.picture}>图片</div>
                <div style={styles.info}>
                    <div>刘纪鹏</div>
                    <div>title</div>
                    <div>
                        <span>80粉丝</span>
                        <span> 286回答</span>
                    </div>
                </div>
                <div>
                    已经关注
                </div>
            </div>
        );
    }
}
class StarTitle extends Component{
    render(){

        var style = {
            textAlign:'center'
        }
        return (
            <div style={style}>{this.props.title}</div>
        )
    }
}
class StarTable extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flexDirection:'column',
            },
            more:{
                textAlign:'center'
            }
        }
        return (
            <div style={styles.container}>
                <StarTitle title={"明星达人"}/>
                <StarItem/>
                <StarItem/>
            </div>
        );
    }
}


class BlockContainer extends Component{
    render(){
        var styles = {
            blockContainer:{
                display:'flex',
                flexDirection:'column',
                marginTop:10,
            },
            block:{
                display:'flex',
                flexDirection:'row',
            },
            blockContent:{
                flex:1,
                textAlign:'left'
            },
            picture:{
                marginRight:10
            }
        }
        return (
            <div style={styles.blockContainer}>
                <div style={styles.block}>
                    <div style={styles.picture}>图标</div>
                    <div style={styles.blockContent}>邀请奖励</div>
                    <div>1900xtb > </div>
                </div>

                <div style={styles.block}>
                    <div style={styles.picture}>图标</div>
                    <div style={styles.blockContent}>邀请奖励</div>
                    <div>1900xtb > </div>
                </div>
            </div>
        );
    }
}
class Discovery extends  Component{
    render(){
        var styles = {
            page:{
                display:'flex',
                flexDirection:'column',
            },
            blockContainer:{
                display:'flex',
                flexDirection:'column',
                marginTop:10,
            },
            block:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
            },
            blockContent:{
                flex:1
            }
        }
        return (
            <div style={styles.page}>
                <BlockContainer/>
                <BlockContainer/>
            </div>
        )
    }
}
export default  class PresentDiamond extends Component{
    render(){
        var styles = {
            page:{
                display:'flex',
                flex:1,
                flexDirection:'column',
            },
        }
        return <div style={styles.page}>
            <DiamondTitle/>
            <DiamondTable/>
            <PresentButton/>
            <StarTable/>
            <Discovery/>
        </div>
    }
}

module.exports = PresentDiamond;