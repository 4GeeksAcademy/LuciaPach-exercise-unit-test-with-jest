
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}

// Función para convertir de Yen a Libras Esterlinas
function fromYenToPound(valueInYen) {
    // Calcula el valor en Libras Esterlinas utilizando la tasa de conversión
    const conversionRate = 0.87 / 156.5; // 0.87 GBP por 156.5 JPY
    const valueInPound = valueInYen * conversionRate;
    // Redondea el resultado a 2 decimales
    return parseFloat(valueInPound.toFixed(2));
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))



// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }