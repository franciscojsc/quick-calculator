'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const operator = select.options[select.selectedIndex].value;
    const num1 = parseFloat(document.querySelector('#num1').value);
    const num2 = parseFloat(document.querySelector('#num2').value);

    const result = calculator(num1, num2, operator);
    document.querySelector('#result').value = result;
  });

  const select = document.querySelector('#operator');
  select.addEventListener('click', function () {
    const operator = select.options[select.selectedIndex].value;
    document.querySelector('#operatorSign').innerHTML = operator;
  });
});

function calculator(num1, num2, operator) {
  try {
    switch (operator) {
      case '+':
        return sum(num1, num2);
      case '-':
        return subtraction(num1, num2);
      case 'x':
        return multiplication(num1, num2);
      case '/':
        return division(num1, num2);

      default:
        break;
    }
  } catch (error) {
    return '#ERROR';
  }
}

function sum(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}
