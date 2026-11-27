// falsy values => 0,"",false,-0,null,undefined,BigInt 0n,NaN
// truthy values => {},[],'0','false',true,function (){}

const marks=75;
if(marks>90){
    console.log("Distinction");
}
else if(marks>70){
    console.log("first class");
}
else if(marks>40){
    console.log("pass");
}
else{
    console.log("fail");
}

// Check array
let f = [10,20,30]
if(f.length == 0)
    console.log("Empty Array")

let obj = {
    id :1,
    name : "Alex"
}

if(Object.keys(obj).length==0)
{
    console.log("Empty Object")
}

let day="monday";
switch(day){
    case "monday":
        console.log("first");
        break;
    case "january":
        console.log("second");
        break;
    deafult:
        console.log("invalid");
}

let a= 10 ?? null;
let b= 15?? undefined;
let c= 10 ?? 15;
let d = null??undefined;
let e = undefined??null;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

