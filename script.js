const values = [];

// pętla wyświetla losową liczbe od 1 do 1000. pokazuje 10 liczb "i = 0; i < 10; i++"

for(let i = 0; i < 10; i++) {
    const randomValues = Math.floor(Math.random() * 1000) + 1
    values.push(randomValues);
}

console.log(values);