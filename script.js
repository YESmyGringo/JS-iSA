const foo = true;

const bar = foo ? "Hello!" : "Bye!"; // Hello!  -> true
console.log(bar);

const bar2 = foo && false ? "Hello!" : "Bye!"; // Bye!  -> false
console.log(bar2);