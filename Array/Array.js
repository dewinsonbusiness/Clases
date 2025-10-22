
function ArrayS(number) {
  
    const ArrayCantida = new Array(number);
  for (let i = 0; i < number; i++) {
   
     ArrayCantida[i] = i + 1

   if (ArrayCantida[i] - Math.floor(ArrayCantida[i] / 5) * 5 == 0 && ArrayCantida[i] - Math.floor(ArrayCantida[i] / 3) * 3 == 0 ) {
        console.log("FizzBuzz"); 
     }

     else if (ArrayCantida[i] - Math.floor(ArrayCantida[i] / 3) * 3 == 0) {
        console.log("Fizz"); 
     } 

     else if (ArrayCantida[i] - Math.floor(ArrayCantida[i] / 5) * 5 == 0) {
        console.log("Buzz"); 
     } 

      else {

      console.log(ArrayCantida[i]); 
     }

     
     
 
}
}

ArrayS(15)

//let x=3;
//const fruits = new Array(x);
//console.log(fruits.length); // 2
//console.log(fruits[0]); // "Apple"