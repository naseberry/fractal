'use strict';

const _ = require("lodash");


function keysDeepLodash(obj, res) {
    if (_.isUndefined(obj)) {
        throw new Error(`map-keys-deep-lodash expects an object but got ${typeof obj}`);
    }

    const keys = _.keys(obj);
    res = res || [];

    keys.forEach(function(key) {
        if (obj.hasOwnProperty(key)) {
            const val = obj[key];
            if (_.isPlainObject(val)) {
                res.push(keysDeepLodash(val, [key]));
            } else {
                res.push(key);
            }
        }
    });


    return res;
}

// _.mixin({'keysDeep': keysDeepLodash});

module.exports = keysDeepLodash;
