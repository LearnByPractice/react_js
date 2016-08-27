/**
 * Created by Thoughtworks on 16/8/6.
 */

var $ = require('jquery')

var fetcher = (url)=>{
    return new Promise((resolve, reject)=>{
        $.get(url)
            .done(resolve)
            .fail(reject);
    });
}

module.exports = fetcher;
