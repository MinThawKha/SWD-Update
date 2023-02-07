
const fruits = ["apple","orange","mango","grape"]
//this is array looping
// for of looping
for (x of fruits){
    console.log(x)
}
// for in looping
for ( x in fruits){
    console.log(typeof x,x, fruits[x])
}
                         
const koNyiInfo = [{
    id:1,
    name:"Myanmar",
    mark:55
},
{
    id:2,
    name:"English",
    mark:32
},
{
    id:3,
    name:"Math",
    mark:97
},
{
    id:4,
    name:"Che",
    mark:39
},
{
    id:5,
    name:"Phy",
    mark:90
},
{
    id:6,
    name:"Eco",
    mark:99
},];
   

        
for (x of koNyiInfo){
    for (y in x){
        console.log(y,x[y])
        
    }
    console.log("= = = = = = = = ")
}

