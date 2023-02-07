
const recordArea = [];


function calcArea(width,breath){
let area = width * breath;
const resultArea = {
    width:width+" ft",
    breath:breath+" ft",
    area:area+ " sqft"
}
recordArea[recordArea.length] = resultArea; 

return area + " sqft";

}
console.log(calcArea(17,60));
console.log(calcArea(20,30));
console.log(calcArea(15,40));
// this is console table 
console.table(recordArea);