/**
 * Created by schaud3 on 3/1/17.
 */

const async = require('async');

function _func1(data, callback) {
    if(data.func1) {
        data.func1 = 'done';
        callback(null, data);
    } else {
        callback({error: "func1 not specified"});
    }
}

function _func2(data, callback) {
    if(data.func2) {
        data.func2 = 'done';
        callback(null, data);
    } else {
        callback({error: "func2 not specified"});
    }
}

function _func3(data, callback) {
    if(data.func3) {
        data.func3 = 'done';
        callback(null, data);
    } else {
        callback({error: "func3 not specified"});
    }
}

function cb(error,data) {
    if(error) {
        console.log(`error occured ${error.error}`);
    } else {
        console.log('data', data);
    }
}

function main () {
    data = {
        func1: "not done",
        func2: "not done",
        func3: "not done"
    }
    async.waterfall([_func1.bind(null,data),_func2, _func3],cb);
}
main();
