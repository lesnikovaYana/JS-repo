'use strict';
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  a: 0,
  b: 0,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b;
  }
};

// calculator.read(1, 3);
// console.log(calculator.sum());
// console.log(calculator.mul());

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться. 
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  }
};

// ladder.up().up().down().showStep().down().showStep();