let d=new Date(/*"2026-11-26"*/);
console.log("------------------------------------------------");
console.log("toDateString");
console.log(d.toDateString());
console.log("------------------------------------------------");
console.log("toString()");
console.log(d.toString());
console.log("------------------------------------------------");
console.log("toLocaleString");
console.log(d.toLocaleString());
console.log("------------------------------------------------");
console.log("toLocatetimeString");
console.log(d.toLocaleTimeString());
console.log("------------------------------------------------");
console.log("getDate");
console.log(d.getDate());
console.log("------------------------------------------------");
console.log("get month year date day");
console.log(d.getFullYear());
console.log(d.getMonth()+1);
console.log(d.getDate());
console.log(d.getDay());
console.log("------------------------------------------------");
console.log("ISO String");
console.log(d.toISOString());
console.log("------------------------------------------------");
console.log("toJSON");
console.log(d.toJSON());
console.log("------------------------------------------------");
console.log("country date&Time");
console.log(d.toLocaleString("en-IN"));
console.log(d.toLocaleString("en-US"));
console.log("------------------------------------------------");
let dfd = new Date('2026-03-23');

let formatted = dfd.toLocaleString('en-IN', {
    weekday:'short',   // "Monday" (or 'short' -> "Mon")
    day:'2-digit',    // "23" (or '2-digit' -> "23")
    month:'narrow',     // "March" (or 'short' -> "Mar")
    year:'numeric'    // "2026"
});

console.log(formatted); // "Monday, 23 March 2026"