test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One euro should be 146.26168224299064 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(3.5);
    const expected = 3.5 * 511.91588785046724;
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724);
})

test("One euro should be 168.11687614136855 pound", function() {
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(3.5);
    const expected = 3.5 * 168.11687614136855;
    expect(fromYenToPound(3.5)).toBe(588.40906649479);
})

