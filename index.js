/**
 * Wraps value in a getter function if it is not already a function
 * @param value
 * @returns {function}
 */
var functionify = function (value) {
    return functionify.isFunction(value) ? value : functionify.generateGetterFunction(value);
};

/**
 * Returns a getter function for the given value
 * @param value
 * @returns {Function}
 */
functionify.generateGetterFunction = function (value) {
    return function () {
        return value;
    };
};

/**
 * Checks whether the given value is a function
 * @param value
 * @returns {boolean}
 */
functionify.isFunction = function (value) {
    return toString.call(value) === '[object Function]' || typeof value === 'function';
};

module.exports = functionify;