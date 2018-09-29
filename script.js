const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//let i = 0;

//while(i < a.length) {
//    console.log(a[i])
//    i++;
//}

for(let value of a){
    console.log('Value:', a);
}

for(let index in a) {
    console.log('Index:', a);
}