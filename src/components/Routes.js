/**
 * Created by Thoughtworks on 16/8/8.
 */

var React = require('react')
var {hashHistory, Router, Route} = require('react-router');

var App = require('./App');
var Shop = require('./Shop');
var Shoppingcart = require('./ShoppingCart');
var ShopInfo = require('./ShopInfo');
var {syncHistoryWithStore} = require('react-router-redux');

var ChoseOptions = require('../components/ChoseOptions')
var Order = require('../components/Order')
var CommentTable = require('../components/Comment')
var TestComponent = require('../components/TestComponent')
var PresentDiamond = require('../components/PresentDiamond')
var IdentityComponent = require('../components/IdentityComponent')
var calculatorCompoent = require('../components/calculatorCompoent')
class Routes extends React.Component{
    constructor(props){
        super(props)
    }

    getRoutes(){
        var history = syncHistoryWithStore(hashHistory, this.props.store)
        return (<Router history={history}>
            <Route path="/" component={App}>
                <Route path="/shop" component={Shop}/>
                <Route path="/shoppingCart" component={Shoppingcart}/>
                <Route path="/shopinfo" component={ShopInfo}/>
                <Route path="/me" component={ChoseOptions}/>
                <Route path="/comment" component={CommentTable}/>
                <Route path="/present" component={PresentDiamond}/>
                <Route path="/test" component={TestComponent}/>
                <Route path="/identity" component={IdentityComponent}/>
                <Route path="/calculator" component={calculatorCompoent}/>
            </Route>
            <Route path="/order" components={Order}/>
        </Router>)
    };

    render(){
        return (<div>
            {this.getRoutes()}
        </div>)
    }
}

module.exports = Routes