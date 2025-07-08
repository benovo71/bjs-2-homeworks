"use strict";
function solveEquation(a, b, c) {
  let arr = [];

  const descrement = b ** 2 - 4 * a * c;

  if (descrement < 0) {
    return arr;
  } else if (descrement === 0) {
    return [-b / (2 * a)];
  } else {
    return [
      (-b + Math.sqrt(descrement)) / (2 * a),
      (-b - Math.sqrt(descrement)) / (2 * a),
    ];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const interestRate = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthlyPayment =
    creditBody *
    (interestRate + interestRate / ((1 + interestRate) ** countMonths - 1));
  const totalAmount = Number((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}
