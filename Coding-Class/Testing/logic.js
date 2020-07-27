// var x = 5;
// var y = '5';

// console.log( x == y); // true -> x = number y = string; 
// console.log( x === y ); // false;
// console.log( x > y ); // false
// console.log( x>=y); // true
// console.log (x < y); // false
// console.log( x <= y); // true



var x = 5;
var y = '5';
var z = 6;
console.log( x === y && y < z); // false
console.log (x === y || y<z); //true
console.log(!(x===y || y<z)); // false;