var foo = 0;
var boo = foo || "Hello"; // Hello  -- false (0)

var baz = 1;
var zoo = baz || "Hello"; // 1  -- true (1)



var foz = false;
var boz = !foz || 0 || 42; // true

var h = (true && false) || 42; // 42