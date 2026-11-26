const obj={
    id:1234,
    name:"ABC",
    course:"js",
    courseInstructor:"Hitesh"
};
console.log(obj);
let {courseInstructor}=obj;
console.log(courseInstructor);
let {courseInstructor: instructor}=obj; // here used destructor means c reated a short name 
console.log(instructor);