let nums = [1, 5, 7, 4, 56, 8, 9, 6, 544, 3, 4];
nums.reverse().sort();
//console.log(nums);

const letters = ["a", "b", "c,", "f", "v", "j", "z"];
letters.sort().reverse();
console.log(letters);
//When you console log, you get an unexpecteed result because sort() sorts data lexicographically.
//We make sort correctly for numbers by passing in an ordering function as the firt argument to the function ,
//which sort() will then use to sort the data.

//For numbers, the rodering function can simply subtract one number from another.
//If the number is negative, the felft operand is less than the right operand and vice versa...

const compare = (num1, num2) => {
  return num1 - num2;
};

const numbers = [3, 34, 5, 7, 8, 93, 2, 4, 6];
numbers.sort(compare);
//console.log(numbers);

//The sort() function uses the compare function to sort the data numerically instead of lexicographically
