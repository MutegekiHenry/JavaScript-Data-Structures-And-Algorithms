function List() {
  this.listSize = 0;

  this.pos = 0;
  this.dataStore = []; //Initializes the array that will store the list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.iinsert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}

//Adding an element to a list

function append(element) {
  this.dataStore[this.listSize++] = element;

  console.log(element);
}

//REMOVING AN ELEMENT FROM A LIST

//Finding an element from a list is harder to implement

function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }

  return -1;
}
