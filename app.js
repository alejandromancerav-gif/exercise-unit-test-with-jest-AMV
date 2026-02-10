// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// Dollar to Yen
const fromDollarToYen = function(valueInDollar) {
// Convert the given valueInDollar to euros
let valueInEuro = valueInDollar / oneEuroIs.USD;
// Convert the euro value to yen
let valueInYen = valueInEuro * oneEuroIs.JPY;
// Return
return valueInYen;
}

// Yen to Pound
const fromYenToPound = function(valueInYen) {
// Convert the given valueInYen to euros
let valueInEuro = valueInYen / oneEuroIs.JPY;
// Convert the euro value to pound
let valueInPound = valueInEuro * oneEuroIs.GBP;
// Return
return valueInPound; 
}
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Dollar to Yen
const fromDollarToYen = function(valueInDollar) {
    let value
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { 
    sum, 
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
 };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}