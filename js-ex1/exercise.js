
var array = [1,2,3,"a","b","c",true,false];
var countChar = 0;
var countNum = 0;
var countBool = 0;


function countArrayWithType(){

    console.log(array.length);

    for(var i = 0; i < array.length; i++){
        if(typeof array[i] == "number"){
            countNum++;
            
        }else if(typeof array[i] == "string"){
            countChar ++;


        } else if(typeof array[i] == "boolean"){
            countBool ++;
        }
        
    }
    console.log(`The numbers are ${countNum}`);
    console.log(`The char are ${countChar}`);
    console.log(`The bools are ${countBool}`);


}


countArrayWithType();