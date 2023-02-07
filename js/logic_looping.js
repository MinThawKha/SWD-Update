
function PassOrFail(exammark,vipermark){
// this is more than one condition
    if(exammark >= 60 && vipermark >= 60){
        return "You Passed";
    }
    return "You Failed";

}
console.log("this is && logic operator")
console.log(PassOrFail(61,70))
console.log(PassOrFail(50,70)) // vipermark is pass but exammark is failed
console.log(PassOrFail(40,43))
console.log("- - - - - - - - -")

function rideBus(busNo){
    // this is more than one condition
        if(busNo == 65 || busNo == 20){
            return "Happy Trip";
        }
        return "Worng Bus Line";
        
    }
    console.log("this is || logic operator")
    console.log(rideBus(65,20))
    // vipermark is pass but exammark is failed ;so this is true one onedition is true
    console.log(rideBus(65,70))
    console.log(20)
    console.log(rideBus(40,43))
    