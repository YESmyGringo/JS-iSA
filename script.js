// ES5:
var foo = "foo";
var foo = "hello";

// ES6 only:
let baz = "Boo";
let fooz = "Fooz";

{
    let baz = "Booze";
    console.log(fooz, baz);
}

console.log(baz);

const BAR = "I'm bar";