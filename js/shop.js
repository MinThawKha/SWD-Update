const fruits = {
    orange:200,
    apple:300,
    banana:500,
}
let total = 0;
function tax(amount,taxRate = 5){
    return amount*(taxRate/100);
}
function buyFruits(type,quantity){

let cost = fruits[type]*quantity;
let eachCost = cost;
total += eachCost;

// return type+":"+quantity+":"+actualCost + " mmk";
return `${type} : ${quantity} = ${eachCost} mmk`;

}
console.log(buyFruits("orange",5))
console.log(buyFruits("apple",3))
console.log(buyFruits("banana",2))
console.log("Tax cost :",tax(total)," mmk");
console.log("Total :",total, " mmk")
console.log("Net Total :",tax(total)+total," mmk");