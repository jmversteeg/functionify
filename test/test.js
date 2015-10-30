var functionify            = require('../'),
    isFunction             = functionify.isFunction,
    generateGetterFunction = functionify.generateGetterFunction;

require('should');

describe('isFunction', function () {
    it('should detect whether the input argument is a function', function () {
        isFunction(null).should.be.false;
        isFunction({}).should.be.false;
        isFunction(toString).should.be.true;
    });
});

describe('generateGetterFunction', function () {
    it('should generate a getter function for the input argument', function () {
        var inputArg = {
            'foo': 'bar'
        };
        var getterFunc = generateGetterFunction(inputArg);
        getterFunc.should.be.a.Function();
        getterFunc().should.equal(inputArg);
    });
});

describe('functionify', function () {
    it('should wrap the value in a getter function if it is not already a function', function () {
        var getData = function () {
            return 'foobar';
        };
        functionify(getData).should.be.a.Function().and.equal(getData);
        functionify('foobar').should.be.a.Function();
        functionify('foobar')().should.be.exactly('foobar');
    });
});