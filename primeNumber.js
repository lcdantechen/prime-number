/*wrtie a function that takes in a number and returns true */
// if the number is prime, false if the number is not. 
// (Prime numbers are only divisible by themselves and 1)
function isPrime(number) {
    var prime = true;

    for(var i=2; i<=number; i++){
        if(number%i == 0 && i != number) {
            return false;
        }
    }

    return(true);
}

console.log(process.argv[1] + isPrime(process.argv[1]) ? " is prime" : " is NOT prime");



function isPrime(number) {
    var prime = true;
    if (number === 1 || number === 0) {
      return false;
    }
    for(var i=2; i<=Math.floor(Math.sqrt(number)); i++){
        if(number % i == 0 && i != number) {
            return false;
        }
    }

    return(true);
}
for (var i = 0; i < 100; i++) {
  console.log(i, isPrime(i));  
}



function isPrime(number) {
    var prime = true;
    if (number === 1) {
      return false;
    }
    for(var i=2; i<=number; i++){
        if(number % i == 0 && i != number) {
            return false;
        }
    }

    return(true);
}
for (var i = 0; i < 100; i++) {
  console.log(i, isPrime(i));  
}