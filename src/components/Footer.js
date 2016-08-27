/**
 * Created by Thoughtworks on 16/8/6.
 */

var React = require('react');
var{Component} = React;
var FootLink = require('./FootLink');

var styles = {
    footer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:30,
        flexWrap:'wrap'
    },
    item :{
        display:'fex',
        backgroundColor:'deepskyblue',
        flex:1,
        textAlign:'center',
        padding:10,
    },
}

class Footer extends Component{
    render(){
        return (
            <div style={styles.footer}>
                <FootLink url={"/shop"} name="店铺" typ
                          e="link"/>
                <FootLink url={"/shoppingCart"} name="购物" type="link"/>
                <FootLink url={"/me"} name="投注" type="link"/>
                <FootLink url={"/comment"} name="评论" type="link"/>
                <FootLink url={"/present"} name="打赏" type="link"/>
                <FootLink url={"/test"} name="测试" type="link"/>
                <FootLink url={"/identity"} name="会员" type="link"/>
            </div>
        )
    }
}

module.exports = Footer;