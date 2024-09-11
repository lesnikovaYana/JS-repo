'use strict';
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.read = function (a, b) {
    this.a = a;
    this.b = b;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

// let calculator = new Calculator();
// calculator.read(2, 5);
// console.log(calculator.sum());
// console.log(calculator.mul());

// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value = this.value + +prompt('Сколько нужно добавить?', 0);
  };
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

console.log(accumulator.value); 