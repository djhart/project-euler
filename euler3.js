var isPrime = function(num){
    if (num === 1 || num ===2){
        return true;
    }
    else{
        var a = 0;
        for(i = 2; i <= Math.sqrt(num); i++){
            if (num % i === 0){
                a = 1;
            }
        }
        if (a === 0){
            return true;
        }
        else{
            return false;
        }
    }
};

//console.log(isPrime(2));

var pFactor = function(arg){
    var j = arg;
    var factors = [];
    var ind = 0;
    var a = 0;
    while(a === 0){
        for (i = 2; i <= Math.sqrt(j); i++){
            if(j % i === 0){
               // if(isPrime(i) === true){
                    factors[ind] = i;
                    ind +=1;
                    j = j/i;
                    i = arg;
                    if(isPrime(j) === true){
                        factors[ind] = j;
                        a = 1;
                    }
               // }
            }
        }
    }
    return factors;
};
var s = performance.now();
console.log(pFactor(600851475143));
var f = performance.now();
console.log("time: " + (f - s) + " ms");
