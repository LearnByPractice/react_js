var React = require('react');
var {render} = require('react-dom');
var {Provider} = require('react-redux');
var body = document.getElementById('app');
var DevTools = require('./redux/DevTools');
var initState = require('./data/initState')
const store = require('./redux/store')(initState());
var Routes = require('./components/Routes')


 render(
    <Provider store={store}>
        <div>
            <DevTools/>
            <Routes store={store}/>
        </div>
    </Provider>, body
);

















