function sum(a, b) {
    // if ( typeof a !== 'number' || typeof b !== 'number' ) {
    //     throw new TypeError();
    // }
    Array.prototype.map.call(arguments, elem => {
        if (typeof elem !== 'number') {
            throw new TypeError();
        };
    });

    return a + b;
};

module.exports = sum;
