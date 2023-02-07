function myself() {
    let myName = "Min Thaw Kha";
    let age = 23;
    console.log(`my name is ${myName} and ${age} years old`)
    return "this is return";

}
console.log(myself());

function inchTofeet(x, ft) {
    // let inch = 100;
    let unitconversion = 1 / 12;
    // console.log(x*unitconversion);
    return showConvert(x/ft);

}
// this is function to function 
function showConvert(y){
    return `this is convert inches to feet `+ y;
}
console.log(inchTofeet(12, 12));
console.log(inchTofeet(50, 12));
console.log(inchTofeet(200, 5));

let fruitsArray = ["apple", "banana", "orange", "mango"];

console.log(fruitsArray[2]);
console.log(fruitsArray);
console.log(fruitsArray[0]);
// this is arr to array 
let mySelf = [

    "min thaw kha",
    "24",
    "developer",
    ["html", "css", "js", "bootstrap"],
    "mandalay"
];
// this is reassign array
mySelf[4] = "pakokku";
console.log(mySelf[2], ",", mySelf[4]);
//this is call of array of array
console.log(`my professional language is` + " " + mySelf[3][2]);
console.log(mySelf.length);

// this is object type
let fruitsobject = {
    name: "ko thaw",
    //do not use space
    "myAge": "23",
    "mySkill": ["html", "css", "js"],
    work: "developer"



}
// this is called of object you want
console.log(fruitsobject["name"])
// this is reassign object 

fruitsobject.work = "webdeveloper";


console.log(fruitsobject);
console.log(fruitsobject.mySkill[2]);
console.log(fruitsobject.work);

// Addintion of array and objects

const student = [
    {
        name: "mgmg",
        work: "student",
        sub: ["mya", "eng", "bio", "che", "phy", "math"],

        majSub: "bio"
    },
    {
        name: "mgmg",
        work: "student",
        sub: ["mya", "eng", "bio", "che", "phy", "math"],

        majSub: "bio"
    },
    {
        name: "mgmg",
        work: "student",
        sub: ["mya", "eng", "bio", "che", "phy", "math"],
        majSub: "bio"
    }
];
console.log(student);
 
let num = 1;
num = num + 1;
num += 1;
    console.log(num++);
    console.log(++num);

    // this is not ! operator 
    console.log(5>10); // this is false
    console.log(!(5>10)); //this is true

    // this is condition statement 
    // && || * +                
    //  && သည် အားလုံးမှမှန်မှ true ဖြစ်မည် တစ်ခုမှားတာနဲ့ false
    
    let condition = true && false && true;
    console.log(condition);
    
    //  && သည် အားလုံးမှားမှ ် ် false ဖြစ်မည် တစ်ခုမှန်တာနဲ့ true
    let condition2 = true || false || true || true
    console.log(condition2);

    // this is ternalri operator ?
    let x = 5;
    console.log(x ? true:false);
    console.log(x >= 10 ? true:false);
    let haveUfinishDinner = false;
    let result = haveUfinishDinner ? "စားပြီးပါပြီ":"မစားရသေးပါ";
    console.log(result)

    // this is default parameter function expression
    // function statement
    function run(text = "testing"){
        return 'this is'+" "+ text;
    }
    console.log(run());
    console.log(run("testing again"));


    // function expression
    const runn = function(text = "testingExpression"){
        return 'this is '+text;
    }
    console.log(runn());
    // iife ()() this is not call function
    (function(){
        let x = 5;
        let y = 4;
        console.log(x+y);
    
    })();