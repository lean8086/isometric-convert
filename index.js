/**
 * Convert cartesian coordinates to isometric.
 * @param {Number} cartX
 * @param {Number} cartY
 * @return {Object}
 * @api public
 */
exports.toIsometric = function (cartX, cartY) {
    return {
        'x': cartX - cartY,
        'y': (cartX + cartY) / 2
    };
};

/**
 * Convert isometric coordinates to cartesian.
 * @param {Number} isoX
 * @param {Number} isoY
 * @return {Object}
 * @api public
 */
exports.toCartesian = function (isoX, isoY) {
    return {
        'x': (2 * isoY + isoX) / 2,
        'y': (2 * isoY - isoX) / 2
    }
};
