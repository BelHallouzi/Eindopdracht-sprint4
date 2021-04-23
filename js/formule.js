/* Formules */

let degreesCelsius;
let degreesFahrenheit;

const celsiusConvertFormula = (degreesCelsius * 1.8) + 32;
const fahrenheitConvertFormula = (degreesFahrenheit - 32) / 1.8;

/* Variabels voor inputvelden en knoppen */

const celcsiusConvertButton = document.querySelector('.c_to_f');
const celsiusInput = document.querySelector('.input_celsius');
const fahrenheitConvertButton = document.querySelector('.f_to_c');
const fahrenheitInput = document.querySelector('.input_fahrenheit');

/* Temperatuur knoppen klikbaar maken en temperatuur omrekenen */

const celsiusButton = document.querySelector('.c_to_f');
if (celsiusButton) {
    celsiusButton.addEventListener('click', celsiusConvert);
}

function celsiusConvert() {
    const addCelsius = celsiusInput.value;
    degreesCelsius = document.querySelector('.input_celsius').value;
    celsiusInput.value = celsiusConvert(degreesCelsius);
    console.log('Knop werkt en: ' + degreesCelsius);
    console.log(celsiusConvertFormula);
}

const fahrenheitButton = document.querySelector('.f_to_c');
if (fahrenheitButton) {
    fahrenheitButton.addEventListener('click', fahrenheitConvert);
}

function fahrenheitConvert() {
    const addFahrenheit = fahrenheitInput.value;
    degreesFahrenheit = document.querySelector('.input_fahrenheit').value;
    fahrenheitInput.value = fahrenheitConvert(degreesFahrenheit);
    console.log('Deze knop werkt ook en: ' + degreesFahrenheit);
    console.log(degreesFahrenheit);
} 

celsiusConvert = (degreesCelsius) => (degreesCelsius * 1.8) + 32;
fahrenheitConvert = (degreesFahrenheit) => (degreesFahrenheit - 32) / 1.8;
