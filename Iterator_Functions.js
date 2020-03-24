//Iterator functions are those that return a new array after looping through the data

const curve = grade => (grade += 5);

const grades = [56, 77, 89, 42, 65, 76];

const newGrades = grades.map(curve);

// console.log(newGrades);

//An example that uses strings

const first = word => word[0];

const words = ["You ", "Only", "Live", "Once"];

const abbreviation = words.map(first).join("");
console.log(abbreviation);
