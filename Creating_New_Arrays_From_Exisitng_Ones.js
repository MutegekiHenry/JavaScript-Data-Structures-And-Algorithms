//Joining Two Arrays into one that holds the values of both
//Option 1
let dept1 = ["Mike", "Liz", "Joseph"];

let dept2 = ["Corona", "Steven", "Miles"];

const depts = dept1.concat(dept2);

// console.log(depts);
const combineDepts = dept2 + dept1;
// console.log(combineDepts);

// Use of the splice method for adding and removing elements from an array
//It starts from a position that has been passed as an argument and ignores the values that
//are before it.
const spl = dept2.splice(1);
console.log(spl);
