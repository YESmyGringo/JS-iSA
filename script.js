
const a = [1,2,3,4,5,6];
const x = [7,8,9];
console.log(a);
console.log(x);

const z = a.concat(x); // [1,2,3,4,5,6,7,8,9]
console.log(z);


//const selectedItem = [a[1]]



// --- wyciaganie pierwszej i ostatniej wartości  z tablicy "a"
const selectedItem = a.slice(0,1); // [1]
console.log(selectedItem);

const lastItem = a.slice(a.length -1); // [6]
console.log(lastItem);


// --- scalenie selected i last w jedną tablice
const w = selectedItem.concat(lastItem);  // [1,6]
console.log(w);


// --- to samo co wyżej krótszym kodem
console.log([...a.slice(0,1), a.pop()]);  // [1,6]