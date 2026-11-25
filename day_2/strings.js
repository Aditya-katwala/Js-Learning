let str = "  Hello JavaScript Developer, Welcome to JavaScript!  ";
console.log("Length: "+str.length);
console.log("Upper: "+str.toUpperCase());
console.log("Lower: "+str.toLowerCase());
console.log("Trim: "+str.trim());
console.log("Trim Start: "+str.trimStart());
console.log("Trim End: "+str.trimEnd());
console.log("Index of: "+str.indexOf("JavaScript"));
console.log("last indexof: "+str.lastIndexOf("JavaScript"));
console.log("include: "+str.includes("Developer"));
console.log("start with: "+str.startsWith("  "));
console.log("start with: "+str.startsWith("Hello"));
console.log("start with: "+str.endsWith("!"));
console.log("start with: "+str.endsWith("  "));
console.log("slice: "+ str.slice(0,5));
console.log("slice: "+ str.slice(1,-6));
console.log("slice: "+ str.slice(-6,-1));
console.log("substring: "+str.substring(0,11));
console.log("substr: "+str.substr(0,5));
console.log("replace: "+ str.replace("JavaScript","Python"));
console.log("replace: "+ str.replaceAll("JavaScript","Python"));
let a=str.split(" ");
console.log(a);
let b= a.join(" ");
console.log(b);
console.log("charAt: "+ str.charAt(9)); // return charcater at pos
console.log("char codeAt: "+ str.charCodeAt(5)); // return ascii value
console.log("[] notation: "+ str[6]);
let s1=str.substring(2,8);
console.log("repeat: ",s1.repeat(3));
let s2="welcome"
console.log("Concat: ",s2 +str.concat());