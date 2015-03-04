module.exports.util = {};

/**
 * Checks whether the given value is a function
 * @param value
 * @returns {boolean}
 */
module.exports.util.isFunction = function (value) {
    return toString.call(value) === '[object Function]' || typeof value === 'function';
};

/**
 * Returns a getter function for the given value
 * @param value
 * @returns {Function}
 */
module.exports.util.generateGetterFunction = function (value) {
    return function () {
        return value;
    };
};

/**
 * Wraps value in a getter function if it is not already a function
 * @param value
 * @returns {function}
 */
module.exports.functionify = function (value) {
    return module.exports.util.isFunction(value) ? value : module.exports.util.generateGetterFunction(value);
};