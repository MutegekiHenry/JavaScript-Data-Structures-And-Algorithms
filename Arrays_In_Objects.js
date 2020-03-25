//An object that stores the weekly observed high temperature. The object has functions for adding new temperature
//and computing the average of the temperatures sored in the object

const weeklyTemps = () => {
  this.add = add;
  this.average = average;
  this.dataStore = [];
};

const addTemp = temp => {
  this.dataStore.push(temp);
};

const average = () => {
  let total = 0;
  for (let i = 0; i < dataStore.length; ++i) {
    total += this.dataStore[i];
  }
  return total / this.dataStore.length;
};

let thisWeek = weeklyTemps();

this.week.add(75);
this.week.add(26);
this.week.add(76);
this.week.add(29);
this.week.add(45);
this.week.add(25);
this.week.add(43);

console.log(this.weeklyTemps.average);
