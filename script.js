//let i = 0;

//while (i < 5) {
//    i++;
//    if (i === 3) {  // przeskakuje liczbe 3 i idzie dalej
//        continue;
//    }
//    console.log(i);
//}


var numbers = [1,2,3,4,5];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {  // przy 3 zatrzymuje funkcje
        break;
    }
    console.log(numbers[i]);
}