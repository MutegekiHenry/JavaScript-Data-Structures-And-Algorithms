//Creating a two dimensional array in JS is complex. Below is How Crowford extends the array object in
//a function that sets the number of rows and columns and sets each value to a value passed to the function in his
//book JavaScript: The Good Parts (O'Reilly, p.64)

Array.matrix = function(numrows, numcols, initial) {
  const arr = [];
  for (let i = 0; i < numrows; ++i) {
    const columns = [];
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};

//Here is some code to test the definition above
const nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]);

const names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names[1][2]);

//Two dimensional arrays can aslo be created in one line and initialized it to a set of values

const grades = [
  [1, 65, 76, 87],
  [76, 54, 65, 34, 34],
  [43, 24, 65, 76]
];
console.log(grades[2][3]);

//Processing two dimensional array elements
//There are two patterns but for both, we use a nested for loop. For columnar processing, the outer loop moves
//through the rows and the inner loop moves thru the columns

//PATTERN ONE

const grades__ = [
  [32, 43, 54, 76],
  [54, 65, 66, 76],
  [32, 78, 78, 66, 56]
];

const total = 0;
const avg = 0.0;

for (let row = 0; row < grades__.length; ++row) {
  for (let col = 0; col < grades__[row].length; ++col) {
    total = total + grades__[row][col];
  }

  avg = total / grades__[row].length;
  console.log("Student " + parseInt(row + 1) + " average" + avg.toFixed(2));

  total = 0;
  avg = 0;
}

// To perform a row-wise computation, we flip the loops so that the outer loop controls the columns and the inner loop
//controls the rows

//You wil have to first comment out either of the loops since the same variable names are used...

const grades__ = [
  [32, 43, 54, 76],
  [54, 65, 66, 76],
  [32, 78, 78, 66, 56]
];

const total = 0;
const avg = 0.0;

for (let col = 0; col < grades__[row].length; ++col) {
  for (let row = 0; row < grades__.length; ++row) {
    total = total + grades__[row][col];
  }

  avg = total / grades__[row].length;
  console.log("Student " + parseInt(row + 1) + " average" + avg.toFixed(2));

  total = 0;
  avg = 0;
}
