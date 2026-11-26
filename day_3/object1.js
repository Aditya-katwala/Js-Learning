let dept=Symbol("department"); // creating symbol

const emp={
    id:1234,  // number
    name:"Aditya", // string
    salary:15000,  // number
    idLoggedin:true,  // boolean
    [dept]:"IT", // symbol (passes as symbol type)
    dept1:"Marketing", // wrong way to use symbol variable (passes as string type)
    greeting:function(){
        console.log( `Hey ${emp.name}`);
        console.log( `Hey ${this.salary}`);
    }
};
// console.log(emp);

/* access object's value  */
// console.log(emp.id);
// console.log(emp.name);
// console.log(emp["salary"]);
// console.log(emp[dept]);

/*  changing obejct's value   */
// emp.salary=20000;
// console.log(emp);
/*   freeze object so you can not modify the object's value    */
// emp.freeze(); you can not use freeze directly using object variable
// Object.freeze(emp);
// emp.id=9999;
// console.log(emp);
/*    accessing object's function    */
console.log(emp.greeting());

emp.Welcome=function() {
    console.log(`welcome, ${emp.name}`);
}
console.log(emp.Welcome());
