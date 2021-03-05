formula(1, 3, 5) //=> 8
formula(3, 4, 6) //=> 18
formula(2, 4) //=> 9
formula(5, 6) //=> 31
formula(3) //=> 4
formula(5) //=> 6
formula() //=> 2

// review all the possible parameters
function formula(n1 = 1, n2 = 1  ,n3 = 1){
    var res = n1 * n2 + n3;
    console.log(res); 
   
}


