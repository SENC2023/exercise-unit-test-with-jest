let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5 / 1.07;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 146.26168224299064 / 0.87;
    return valueInPound;
}

console.log(fromEuroToDollar(1), fromDollarToYen(1), fromYenToPound(1));

module.exports = { oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound }