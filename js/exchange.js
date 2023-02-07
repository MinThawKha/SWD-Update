const rates = {
    usd : 2100,
    eur : 2108,
    sgd : 1450,
}
// usd to mmk change
function usdTommk(inputUSD){
    return  (inputUSD*rates.usd)+" MMK"
}
console.log(usdTommk(5));
// selected currency to mmk change
function Tommk(amount,selectcurrency){

return (amount*rates[selectcurrency])+ " MMK";

}
console.log(Tommk(30,"eur"));
console.log(Tommk(30,"usd"));
console.log(Tommk(30,"sgd"));

// mmk to selected currency change

function mmkToselectd(mmkAmount,selectedcurrency){
    return (mmkAmount/rates[selectedcurrency]) + " "+selectedcurrency;
}
console.log(mmkToselectd(500000,"eur"))
console.log(mmkToselectd(500000,"sgd"))
console.log(mmkToselectd(500000,"usd"))

// from any to any currency exchange
function anyToanycurrency(amount,fromCurrency,changeCurrency){
    let mmk = amount*rates[fromCurrency]
    let changeResult = mmk/rates[changeCurrency];
    return changeResult + " "+ changeCurrency;
}
console.log(anyToanycurrency(220,"usd","sgd"));
console.log(anyToanycurrency(1,"usd","usd"));