
import React from 'react'
import {Component} from 'react'
import {render} from 'react-dom'

class IdentityComponent extends Component{
    render(){
        var styles = {
            container:{
                display:'flex',
                flex:1,
                flexDirection:'column'
            },
            item:{
                display:'flex',
                flexDirection:'row',
                alignItems:'flex-start',
                backgroundColor:'aliceblue'
            },
            picture:{
                alignSelf:'center'
            },
            content:{
                flex:1,
                flexDirection:'column',
                marginLeft:10,
            },
            contentTitle:{
                display:'flex',
                flexDirection:'row',
            },
            upgradeTable:{
                display:'flex',
                flexDirection:'column',
                marginBottom:10,
                backgroundColor:'red',
                color:'white'
            },
            upgradeItem:{
                textAlign:'center'
            },

            //margin和padding结合使用
            buttonContainer:{
                alignSelf:'center',
                margin:3
            },
            button:{
                paddingLeft:3,
                paddingRight:3
            }
        }
        return (
            <div style={styles.container}>
                <div style={styles.upgradeTable}>
                    <div style={styles.upgradeItem}>会员升级</div>
                    <div style={styles.upgradeItem}>您当前是普通会员,请进行升级</div>
                </div>
                <div style={styles.item}>
                    <div style={styles.picture}>图标</div>
                    <div style={styles.content}>
                        <div style={styles.contentTitle}>
                            <div>黄金会员</div>
                            <div>$88</div>
                        </div>
                        <div>
                            <div>会员期限一个月</div>
                            <div>偷看昨天收益</div>
                            <div>赠送88xtb</div>
                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <button style={styles.button}>立即购买</button>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = IdentityComponent;