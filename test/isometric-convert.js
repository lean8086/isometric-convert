var convert = require('..'),
    should = require('should');

describe('toIsometric(cartX, cartY)', function () {
    it('should convert cartesian coordinates (1,1) to (0,1) isometric', function () {
        var isometric = convert.toIsometric(1, 1);
        isometric.x.should.equal(0);
        isometric.y.should.equal(1);
    });
});

describe('toCartesian(isoX, isoY)', function () {
    it('should convert isometric coordinates (1,1) to (1.5,0.5) cartesian', function () {
        var cartesian = convert.toCartesian(1, 1);
        cartesian.x.should.equal(1.5);
        cartesian.y.should.equal(0.5);
    });
});

describe('Both methods chained', function () {
    it('should cancel each other', function () {
        var testX = 1,
            testY = 1,
            isometric = convert.toIsometric(testX, testY),
            chained = convert.toCartesian(isometric.x, isometric.y);
        chained.x.should.equal(testX);
        chained.y.should.equal(testY);
    });
});
