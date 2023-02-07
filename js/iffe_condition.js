// this is true condition statement
if(true){
    console.log("hello","this is true");

}else{
    console.log("this is false");
}

// this is false iffe conditional statement
if(false){
    console.log("hello","this is true");

}else{
    console.log("this is false");
}

// this is function iffe
function canIcome(wakeupTime){

if(wakeupTime <= 9){
    let result =`အတန်းထဲဝင်ပါ`;
    return result;
}else{
    return `အတန်းထဲဝင်ခွင့်မရှိပါ`;
}


}
console.log(canIcome(8));
console.log(canIcome(10));
console.log(canIcome(9));

//other way
function canIcome2(wakeupTime2){
    let result;
    if(wakeupTime2 <= 9){
         result = "အတန်းထဲဝင်ပါ2";
       
    }else{
         result =`အတန်းထဲဝင်ခွင့်မရှိပါ2`;
    }
    return result;
    
    }
    console.log(canIcome2(8));
    console.log(canIcome2(10));
    console.log(canIcome2(9));

    // try again another way
    function canIcome3(wakeupTime){

        if(wakeupTime <= 9){
         
            return  `အတန်းထဲဝင်ပါ3`;
        }
            return `အတန်းထဲဝင်ခွင့်မရှိပါ3`;
     
        
        
        }
        console.log(canIcome3(8));
        console.log(canIcome3(10));
        console.log(canIcome3(9));

        // if else if two or more condition
        
        let mark = 50;
        // let mark = 38;
        // let mark = 85;

        if(mark >= 80){
            console.log("Distation")
        }else if(mark >= 40){
            console.log("Pass")
        }else if(mark < 40){
            console.log("Fail")
        }
