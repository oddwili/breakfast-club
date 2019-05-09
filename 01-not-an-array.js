// Implement a class called notAnArray that has the following methods
//
// push
//  - Accepts a value and places it at the end (the next incremented index) of the object with the key being an index based on the length and the value being the value passed into the function
//  ex:
//  notAnArray.push('first')
//  notAnArray.push('second')
//  should result in {0: 'first', 1: 'second'}
//
// pop
//  - removes the value from the end of the object and returns it
//  ex:
//  notAnArray.pop();
//  returns 'second' and the object should look like {0: 'first'}
//
// unshift
//  - Accepts a value and places it at the 0th key of the object with the the value being the value passed into the function
//  - the rest of the values should be shifted over one
//  ex:
//  notAnArray.unshift('now I am first');
//  should result in {0: 'now I am first', 1: 'first'}
//
// shift
//  - removes the value from the front of the object and returns it
//  ex:
//  notAnArray.shift();
//  returns 'now I am first' and the object should look like {0: 'first'}
//

class NotAnArray {
  constructor() {
    this.storage = {};
  }

  push(value) {
    let index = Object.keys(this.storage).length ? Object.keys(this.storage).length : 0;
    this.storage[index] = value;
  }

  pop() {
    let index = Object.keys(this.storage).length ? Object.keys(this.storage).length - 1 : 0;
    if (index) {
      let returnValue = this.storage[index];
      delete this.storage[index];
      return returnValue;
    } else {
      return undefined;
    }
  }

  unshift(value) {
    let unshiftedStorage = {};
    let index = Object.keys(this.storage).length ? Object.keys(this.storage).length : 0;
    unshiftedStorage[0] = value;
    if (index) {
      Object.keys(this.storage).forEach((key) => {
        unshiftedStorage[parseInt(key) + 1] = this.storage[key];
      });
    }
    this.storage = unshiftedStorage;
    return this.storage;
  }

  shift() {
    let firstValue = this.storage[0];
    delete this.storage[0];
    let shiftedStorage = {};
    if (Object.keys(this.storage).length) {
      Object.keys(this.storage).forEach((key) => {
        shiftedStorage[parseInt(key) - 1] = this.storage[key];
      });
      this.storage = shiftedStorage;
    }
    return Object.keys(this.storage).length ? firstValue : undefined;
  }
}

module.exports = NotAnArray;
