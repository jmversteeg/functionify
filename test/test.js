var functionify            = require('../'),
    isFunction             = functionify.isFunction,
    generateGetterFunction = functionify.generateGetterFunction;

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
        getterFunc.should.be.Function;
        getterFunc().should.eql(inputArg);
    });
});

describe('functionify', function () {
    it('should wrap the value in a getter function if it is not already a function', function () {
        var getData = function () {
            return 'foobar';
        };
        functionify(getData).should.be.Function.and.eql(getData);
        functionify('foobar').should.be.Function;
        functionify('foobar')().should.be.exactly('foobar');
    });
});