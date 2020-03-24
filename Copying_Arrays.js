//Below is the code for a shallow copy in array manipulation.
//The new array simply points to the original array's elements.
let nums = [];
for (let i = 0; i < 50; i++) {
  nums[i]++;
}

let same_nums = nums;
nums[0] = 20;
// console.log(nums[0]);
// console.log(same_nums[0]);

//The following code produces the expected result...
function copy(arr1, arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i];
  }
}
let numbers = [];

for (let y = 0; y < 50; ++y) {
  numbers[y] = y + 1;
}

let same_numbers = [];
copy(numbers, same_numbers);

numbers[0] = 22;
console.log(same_numbers[0]);
