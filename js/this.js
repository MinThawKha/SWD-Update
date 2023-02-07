
const mySelf = {
    //property
    name: "thaw kha",
    age:24,

    //method
    learn:function(what,where){
        return "i am learning " + what+" at "+where;
    },
    // method at ES6
   es6learn(what,where = "MMS IT"){
    // this is es6 and template string
        return `${this.name} can learn ${what} at ${where}`;
    },
    // this keyword
    showthis(){
        console.log(this);
        console.log(this.name);
        console.log(this.age,this.learn("js","online"));
    }
}
console.log(mySelf.showthis());
console.log(mySelf.es6learn("css"))