
// this is break and continue 
// you use ; not ,
//you use let for variable not i=1 , let i=1;


for(let i=1;i<=5;i++){
    if(i===3){break;}
    console.log(i,"=====");

}
for(let i=1;i<=10;i++){
    if(i === 5) continue;
    console.log("love",i)
}

// this is array loop

const letters = ["a","b","c","d","e"]

for(let i=0;i<letters.length;i++){
    console.log("index no :",i," : ",letters[i])
};

//this is 


const mark = [50,68,86,90,78]
let totalMark = 0;
for(let subMark = 0;subMark<mark.length;subMark++){
    console.log(mark[subMark]);
    totalMark += mark[subMark];
}
console.log("Total Mark :",totalMark);

// this is complex array looping

const koNyiInfo = {
    name:"ko nyi",
    age:15,
    subject:[
        {
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
        },

    ]
}
// this is adding new statement in object 
koNyiInfo.total = 0;
koNyiInfo.resultExam = {};

console.log(koNyiInfo)
for(let i=0;i <koNyiInfo.subject.length;i++){

    let subMark = koNyiInfo.subject[i].mark;
    let subName = koNyiInfo.subject[i].name;
    console.log(subName," : " ,subMark)
    koNyiInfo.total += subMark;
    // ternalri operator conditional statement
    // koNyiInfo.resultExam[subName] = subMark <= 40 ? "fail" : "success";
    // if conditional statement
    if(subMark <= 40){
        koNyiInfo.resultExam[subName] = "fail"
    }else{
        
        koNyiInfo.resultExam[subName] = "success"
    };


};
console.log("Total Mark of KoNyi : ",koNyiInfo.total);
// this is star loop or nesting ;;netsting is for in for (or) if in if
for(let i=1;i<=8;i++){
    let star = "";
    for(let x=1;x<i;x++){
        star += "* ";
    }
    console.log(star,i);
};
for(let i=8;i>=1;i--){
    let star = "";
    for(let x=1;x<=i;x++){
        star += "* "
    }
    console.log(star, i);
};