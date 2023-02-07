
const mySelf = {
    //property
    name: "thaw kha",
    age:24,

    //method
    learn:function(what,where){
        return "i am learning" + what+" at "+where;
    },
    // method at ES6
   es6learn(what,where = "MMS IT"){
        return "i am learning"+ what+" at "+where;
    },
}
console.log(mySelf.learn("js","online"));