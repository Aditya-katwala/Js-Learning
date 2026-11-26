// IIFE=immediately invoked function expression

/*     1.named IIFE     */
(function add(n1,n2){
    console.log(n1+n2);
})(5,4);

/*     2.unnamed IIFE    */
((n1,n2)=>{
   console.log(n1+n2);
})(1,2);
