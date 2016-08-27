/**
 * Created by Thoughtworks on 16/8/7.
 */

var ActionKey = require('./actionkeys')
var historyUrls = function (state =[], action) {
    var historyUrls = state;
    switch (action.type){
        case ActionKey.PUSH_URL:
            return [action.url, ...historyUrls];

        case ActionKey.POP_URL:{
                var [_, ...rest] = historyUrls;
                return rest;
        }
        default:
            return state;
    }
};

module.exports = historyUrls
