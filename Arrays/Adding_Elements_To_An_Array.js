const nums = [1, 2, 3, 4, 5];
nums.push(6);

// console.log(nums);

//Addig data at the beginning of an array is much harder that adding data at the end of an
//array. To do so without the benefit of a mutator function, each existing element  of
//an array has to be shifter up one position before the new data is added

const numbers = [2, 4, 5];
let newNum = 1;

for (let i = numbers.length; i >= 0; --i) {
  numbers[i] = numbers[i - 1];
}
numbers[0] = newNum;
console.log(numbers);
