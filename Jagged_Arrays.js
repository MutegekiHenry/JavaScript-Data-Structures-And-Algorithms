//A jagged array is one where the rows in the array may have a different number of elements.
//One may have three different elements ehile another may have five elements, while yet another
//row may have only one element

const grades__ = [
  [54, 76],
  [54, 65, 66, 76],
  [32, 78, 78, 66, 56]
];

let total = 0;
let avg = 0.0;

for (let row = 0; row < grades__.length; ++row) {
  for (let col = 0; col < grades__[row].length; ++col) {
    total = total + grades__[row][col];
  }

  avg = total / grades__[row].length;
  console.log("Student " + parseInt(row + 1) + " average" + avg.toFixed(2));

  total = 0;
  avg = 0;
}
