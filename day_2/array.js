// let arr=[1,2,3,4];
// console.log(arr);

// arr.push(5)
// console.log(arr);
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(0); // add ele at first
// console.log(arr);
// arr.unshift(-1);
// console.log(arr);
// arr.shift();// remove ele at first
// console.log(arr);
// console.log(arr.includes(2));
// console.log(arr.indexOf(5));
// console.log(arr.join("+")); // convert array into string with seperting operator
// console.log(arr.slice(0,3));// same as substring create a slice of array
// console.log(arr.splice(0,2));// remove specified range element remove from original array
// console.log(arr);


let arr1=["Shaktiman","balveer","Mighty raju"];
let arr2=["oggy","chhota bheem","sinchain"];
// arr1.push(arr2);
// console.log(arr1);
let arr3=arr1.concat(arr2);
console.log(arr3);
let arr4=[...arr1,...arr2];
console.log(arr4);
const arr5=[1,2,3,[4,5,6],7,8,9,[0,1,2]];
let new_array=arr5.flat();
console.log(new_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.isArray(Array.from("Hitesh")));
console.log(Array.isArray(Array.of("Hitsh","Adi","man","ami")));