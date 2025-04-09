const eur = 1;
const eurToUsd = 1.1033;
const eurToGbp = 0.8338;
const eurToJpy = 146.21;
const eurToCad = 1.4767;
const eurToAud = 1.6225;
const eurToChf = 0.9342;

function currFromToEur(userInput, currencyFrom) {
  if (currencyFrom === "USD") {
    return userInput / eurToUsd;
  }
  if (currencyFrom === "GBP") {
    return userInput / eurToGbp;
  }
  if (currencyFrom === "JPY") {
    return userInput / eurToJpy;
  }
  if (currencyFrom === "CAD") {
    return userInput / eurToCad;
  }
  if (currencyFrom === "AUD") {
    return userInput / eurToAud;
  }
  if (currencyFrom === "CHF") {
    return userInput / eurToChf;
  }
  if (currencyFrom === "EUR") {
    return userInput;
  }
}

function eurToCurrency(userInput, currencyFrom, currencyTo) {
  const userInputInEuro = currFromToEur(userInput, currencyFrom);

  if (currencyTo === "USD") {
    return userInputInEuro * eurToUsd;
  }
  if (currencyTo === "GBP") {
    return userInputInEuro * eurToGbp;
  }
  if (currencyTo === "JPY") {
    return userInputInEuro * eurToJpy;
  }
  if (currencyTo === "CAD") {
    return userInputInEuro * eurToCad;
  }
  if (currencyTo === "AUD") {
    return userInputInEuro * eurToAud;
  }
  if (currencyTo === "CHF") {
    return userInputInEuro * eurToChf;
  }
  if (currencyTo === "EUR") {
    return userInputInEuro * eur;
  }
}

function convert() {
  const currencyFrom = document.getElementById("currency-from").value;
  const currencyTo = document.getElementById("currency-to").value;
  let userInput = parseFloat(document.getElementById("amount-from").value);
  const result = eurToCurrency(userInput, currencyFrom, currencyTo);
  const resultValue = document.getElementById("result-value");

  if (isNaN(userInput) || userInput === 0) {
    document.getElementById("amount-to").value = "";
    return;
  }

  if (Number.isInteger(result)) {
    document.getElementById("amount-to").value = result;
    resultValue.textContent =
      userInput + currencyFrom + "=" + result + currencyTo;
  } else {
    document.getElementById("amount-to").value = result.toFixed(3);
    resultValue.textContent =
      userInput +
      " " +
      currencyFrom +
      " = " +
      result.toFixed(3) +
      " " +
      currencyTo;
  }
}

document.getElementById("amount-from").addEventListener("input", convert);
document.getElementById("currency-from").addEventListener("change", convert);
document.getElementById("currency-to").addEventListener("change", convert);
