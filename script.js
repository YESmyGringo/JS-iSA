const values = [];

for(let i = 0; i < 10; i++) {
    const randomValues = Math.floor(Math.random() * 1000) + 1
    values.push(randomValues);
if(i === 1){ // zatrzymuje sie na 1 i wyswietla dwie wartosci
    break;
}
}
    console.log(values); 