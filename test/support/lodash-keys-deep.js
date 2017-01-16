'use strict';

const _ = require("lodash");

function lodashKeysDeep(obj, res = [], memo = []) {
    
    if (_.isUndefined(obj)) {
        throw new Error(`map-keys-deep-lodash expects an object but got ${typeof obj}`);
    }

    const keys = _.keys(obj);

    keys.forEach(function(key) {
        if (obj.hasOwnProperty(key)) {
            const val = obj[key];     
            if (_.isObject(val) && !_.isEmpty(val)) { 
                res.concat(lodashKeysDeep(val, res, [].concat(memo, key)));
            } else {                  
                res.push((memo.length > 0) ? [].concat(memo,key) : key);
            }
        }
    });

    return res;
}

module.exports = function(obj, res=[], memo=[]){
    return lodashKeysDeep(obj, res, memo);
};
