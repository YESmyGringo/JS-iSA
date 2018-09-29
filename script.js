const a = [1,2,3, ["a","b","c"]];  // --- drugi array na pozycji [3] w pierwszym
// const b = a; --- pokazuja sie dwie takie same tablice w console.log
const b = a.slice(0, a.length);

b[3].push("d"); // --- dodajemy do [3] pozcycji na której jest array "d" =  [1,2,3, ["a", "b", "c", "d"]]

console.log(a,b);

var sliced = a.slice(1, 3); // --- wkazujemy początek i koniec wyświetlania z indexu. do 3 ponieważ +1.
console.log(sliced);