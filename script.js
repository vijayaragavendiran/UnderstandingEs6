'use strict'
// spread

function spread() {
  let firstArray = ['c', 'd', 'e'];
  let secondArray = ['g', 'h'];
  // In this example spread allows to expand the array by ...
  console.log('spread result : ' + 'a', 'b', ...firstArray, 'f', ...secondArray);
}

spread();
// //
//Class
class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calculate();
  }
  calculate() {
    return this.height * this.width;
  }
}

const squareInstance = new Square(10, 10);
console.log('Class result :' + squareInstance.area);
////
