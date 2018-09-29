// var myCar = new Object();

// myCar.make = 'Toyota';
// myCar.model = 'Supra';
//myCar.year = '1994';

// console.log(myCar);



// --- to samo, różne sposoby


 var myCar2 = {
     make: 'Toyota',
     model: 'Supra',
     year: '1994',
     parts: {
         engine: '2jz',
         body: 'coupe',
         color: 'white',
         rims: '19',
         
     },
     sound: function(){ alert('Wrrrrrr!');}
 }
 
 console.log(myCar2);
 myCar2.sound();