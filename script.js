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
////Template Strings
function TemplateStrings(firstName) {
  console.log(
    `Hello ${firstName},
                I am a Template string !!`);
}

TemplateStrings('vijay');

//Arrow functions

var nameList = list => console.log(list); //Arrow function =>

nameList(['vijay', 'adam', 'robert']);

var obj = {
  name: 'vijay',
  actions: ['cricket', 'football', 'hockey'],
  printActions() {
    this.actions.forEach(action => {
      var str = `${this.name} likes to play ${action}`;
      console.log(str);
    })
  }
}
obj.printActions();

//Bind
var calculate = function(x, y) {
  //let a = this;

  console.log(this.val2 + x + y);
  //console.log(arg);
}
var e = {
  val1: 1,
  val2: 2
}
calculate.call(e, 1, 3); //call takes individual args
calculate.apply(e, [1, 3]); //apply takes array as params
var c = calculate.bind(e, 1, 3);
c();

//destructuring
console.log('destructuring');
var a = [1,2,4];
var [x,y,z] = a;
console.log(x);
console.log(y);
console.log(z);
//default values
var [a=4,b=7]=[]
console.log(a);
console.log(b);
