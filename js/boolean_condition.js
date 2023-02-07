// let Name = "thaw kha";
// console.log(Name)
// Name = !Name;
// console.log(Name)
// Name = !Name;
// console.log(Name)
// Name = !Name;
// console.log(Name)
// Name = !Name;
// console.log(Name)

let a = true;
//a သည် true ဖြစ်မှ နောက် condition တစ်ခုကို ထပ်စစ်မှာ 
// a သည် string ဖြစ်ခဲ့လို့ရှိရင် true မပြန်နိုင်တဲ့အတွတွက် နောက် condition အလုပ်မလုပ်ပါ 
// condition ကို && နဲ့ စစ်ထားတာ မလို့
// တကယ်လို့  string ပြန်ချိင်တယ်ဆိုရင် (iife function)() ကို သုံးပေး

a && (function run(){
    console.log("hello");
    return true;
})() && console.log("hello again")

// condition statement 

function ReturnString(name){

    if(typeof name == "string")
    // == or ===
    return name; return "Your input name is incorrect"
}

console.log(ReturnString(33))
console.log(ReturnString(['a','b','c']))
console.log(ReturnString({"age":23,work:"developer"}))
console.log(ReturnString("thaw kha"));

// arguments ကို ် function ထဲမှာပဲ သုံးလို့ရ


 function run(x, y ,z){
    console.log(arguments);
}
console.log(run("x","y","z"))







