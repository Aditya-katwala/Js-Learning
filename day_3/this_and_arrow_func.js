/*       this      */
// const emp={
//     id:123,
//     name:"Adi",
//     getDetail:function(){
//         console.log(`Welcome, ${this.name}`);
//         console.log(this);// return the full object  
//     },
// };
// emp.getDetail();
// console.log(this);
// emp.name="Dishant";
// emp.getDetail();



/*      function(this)      */
// function getinfo(){
//     let name="Adi";
//     console.log(this);
//     console.log(this.name); // returns undefined becuase this not refrence name 
// }
// getinfo();


/*      arrow function   (ecplicit)   */
// const name = (fname)=>{
//     console.log(this);
//     console.log(fname);
//     console.log(this.fname);
// };
// name("Aditya");

/*      arrow function   (ecplicit)   */
// const addi = (num1,num2)=>(num1+num2);
// console.log(addi(5,4)); 
// const addit = (num1,num2)=>{ return num1+num2 };
// console.log(addit(5,4));

