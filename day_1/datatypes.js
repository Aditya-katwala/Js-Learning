/*
Datatypes:-
number => used for the integer values
string => used for the charcter/s
null => used for the stadalone datatypes which is not defined [type=object]
undefined => which is not denied yet [type=undefined]
boolean => which gives true/false value
*/

// let name2="Aditya";
// let age=20;
// let course="BSCIT";
// let city="Surat";
// let arr=["i","love","you"];
// let obj={
//     id:101,
//     name:"ABC"
// };
// console.table([name2,age,course,city,arr,obj]);

let myFunction=function name() {
    console.log("Hello world");
}
console.log(myFunction);
console.log(typeof(myFunction));
myFunction();

let hero=["balveer","choota bheem","oggy"];
console.log(hero);
console.log(typeof(hero));

let bigNumber=1234568n;
console.log(typeof(bigNumber));