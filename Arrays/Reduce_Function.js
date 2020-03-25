function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}

const numbers = [1, 2, 43, 65, 7, 8, 9];
let sum = numbers.reduce(add);

// console.log(sum);

//The reduce function can also be used to concatenate strings

const concat = (str1, str2) => {
  return str1 + str2;
};

let words = [" you ", " are ", " good? "];
let sentence = words.reduce(concat);
console.log(sentence);

//When you are concatenating strings as above, do not forget to add white spaces arounud the
//words so that they can get sapces just like in a normal sentence while you are writing.
