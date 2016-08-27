var applyMiddleWare =(middlewaires, store)=>{
    var dispatch = store.dispatch;
    for (var middleWare of middlewaires){
        dispatch = middleWare(store)(dispatch);
    }
    return Object.assign({}, store, {dispatch});
}

var  dfsReduce = (state, action)=>{
    switch (action.type){
        case 'dfs':
            console.log("dfsReduce preState", state);
            return Object.assign({}, state, {name:'dfs'})
        case 'zlz':
            console.log('dfsReduce:',state);
            return state;
        default:
            console.log("default");
    }
}
var increaseReduce = (state, action)=>{
    console.log("increaseReduce preState:", state);
    return Object.assign({}, state, {increase:'increase'});
}

function combineReduce(reducers){
    return (state, action)=>{
        return Object.keys(reducers).reduce((pre, item)=>{
            return reducers[item](pre, action);
        }, state)
    }
}
var rootReduce = combineReduce({dfsReduce, increaseReduce})

var createStore = (reduce={}, initialState={value:1})=>{
    var reduce = reduce;
    var state =  initialState;
    var getState= ()=>{
        return initialState
    }
    var dispatch = (action)=>{
        state = reduce(state, action)
        console.log("final dispatch", state);
    }
    return {dispatch, getState}
}

function createStoreWithMiddleWare(store, middleWares){
    return applyMiddleWare(middleWares,store);
}

var action1 = {type:'dfs'}

var action2 = (dispatch)=>{
    if (true){
        console.log("异步action")
        dispatch({type:'zlz', aynsc:123})
    }
}

var actions3 = [{type:'dfs'},{type:'dfs'},{type:'dfs'}]

var loggerWrapper = (store)=>(next)=>(action)=>{
    console.log("loggerWrapper before...",store.getState())
    next(action)
    console.log("loggerWrapper after...",store.getState())
}

var xxxxWrapper = (store)=>(next)=>(action)=>{
    console.log("xxxxWrapper before...",store.getState())
    next(action)
    console.log("xxxxWrapper after...",store.getState())
}

var thunk = (store)=>(next)=>(action)=>{
    return typeof action == 'function' ?
        action(next) :  next(action)
}

var mapThunk = (store)=>(next)=>(action)=>{
    return action instanceof Array?
        action.map(function (item) {
            console.log("mapThunk", item);
            next(item)
        }):  next(action)
}

var store = createStoreWithMiddleWare(createStore(rootReduce), [mapThunk, loggerWrapper,xxxxWrapper])
store.dispatch(action1)
// store.dispatch(action2)
store.dispatch(actions3);






