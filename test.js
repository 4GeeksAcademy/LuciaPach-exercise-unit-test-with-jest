// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

const {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js'); // Import the functions

// Test conversion from Euro to Dollar
test('converts 1 Euro to Dollar', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

// Test conversion from Dollar to Yen
test('converts 1 Dollar to Yen', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(156.5); // Using the rate: 156.5 JPY per USD
});

// Test conversion de Yen a Libras Esterlinas y comparación con la tasa de conversión correcta
test('converts 156.5 Yen to Pound', () => {
    const yenAmount = 156.5;
    const expectedPoundAmount = 0.87; // Tasa de conversión: 0.87 GBP por 156.5 JPY
    const convertedPoundAmount = fromYenToPound(yenAmount);
    
    expect(convertedPoundAmount).toBeCloseTo(expectedPoundAmount, 2); // Precisión de 2 decimales
});