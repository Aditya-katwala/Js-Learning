/*  not singlrton object  */
// const emp={
//     id:12345,
//     name:"Aditya"
// }

/*  singletonobject - constructor   */   
// const stud =new Object();
// stud.id=64;
// stud.name="Aditya";
// stud.sem=6;
// console.log(stud);

/*   nested object   */
// const person={
//     user:{
//         fullname:{
//             fname:"Aditya",
//             lname:"Katwala"
//         },
//     },
//     admin:{
//         fullname:{
//             fname:"ABC",
//             lname:"XYZ"
//         },
//     },
// };
/*    here (?) is used for the protection like user not exist then get response   +*/
// console.log(person.user?.fullname);
// console.log(person.user?.fullname.fname);
// console.log(person.admin?.fullname);
// console.log(person.admin?.fullname.lname);





/*   merge teo objects in a single object    */
// const obj1={
//     id:1234,
//     name:"Aditya",
// }
// const obj2={
//     salary:15000,
//     dept:"IT",
// }
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3)
// const obj4={obj1,obj2}
// console.log(obj4);
// const obj5={...obj1,...obj2}; // merge using spread operator(...)
// console.log(obj5)



/*    Array of object    */
// const persons=[
//     p1={
//         id:1,
//         name:"Adi",
//     },
//     p2={
//         id:2,
//         name:"Man",
//     },
//     p3={
//         id:3,
//         name:"Smit",
//     },
// ];
// console.log(persons);
/*    accessing array of objects    */
// console.log(persons[0].id);
// console.log(persons[0].name);
// console.log(persons[1].id);
// console.log(persons[1].name);
// console.log(persons[2].id);
// console.log(persons[2].name);

const User={
    id:64,
    name:"Aditya",
    email:"adi@gmail.com"
}
// getting all the keys 
console.log(Object.keys(User).length);
console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));// return each object as array 
console.log(User.hasOwnProperty("id"));