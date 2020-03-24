let arr = [];
for (let y = 0; y < 200; y++) {
  arr[y] = y / 2;
}
// console.log(arr);
//Prints [ 0,0.5,1,1.5,2,2.5,...]

//Example 2
let numbers = [2, 3, 4, 5, 6];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
