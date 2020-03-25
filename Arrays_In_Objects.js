//An object that stores the weekly observed high temperature. The object has functions for adding new temperature
//and computing the average of the temperatures sored in the object

function weeklyTemps() {
  this.add = add;
  this.average = average;
  this.dataStore = [];
}

function add(temp) {
  this.dataStore.push(temp);
}

function average() {
  let total = 0;
  for (let i = 0; i < dataStore.length; ++i) {
    total += this.dataStore[i];
  }
  return total / this.dataStore.length;
}

let thisWeek = new weeklyTemps();

thisWeek.add(75);
thisWeek.add(26);
thisWeek.add(76);
thisWeek.add(29);
thisWeek.add(45);
thisWeek.add(25);
thisWeek.add(43);

console.log(thisWeek.average);
