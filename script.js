var x1 = "hello";
var x2 = "yo, yo";
var x3 = 200;
var x4 = 200;
var x5 = ['12', '14'];
var x6 = ['60', '7']
var x7 = [1, 6];
var x8 = [1, 6];
var x9 = {key: 'value1'};
var x10 = {key: 'value1'};

console.log("Equal strings:", x1 == x2); // false
console.log("Equal numbers:", x3 == x4); // true
console.log("Equal arreys length:", x5.length == x6.length); // true
console.log("Equal tab:", x7 == x8); // false
console.log("Equal object:", x9 == x10); //false