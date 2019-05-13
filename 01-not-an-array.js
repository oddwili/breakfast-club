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

	length() {
		return Object.keys(this.storage).length;
	}

	push(data) {
		if (data === undefined) return this.length(); // if no parameter is passed in, return current object length with no operations.
		const i = this.length();
		this.storage[i] = data;
		return this.length();
	}

	pop() {
		if (this.length() === 0) return undefined; // return undefined as there's no key to pop
		const i = this.length() - 1; // accounting for 0 based index to grab last key in object
		let deleted = this.storage[i];
		delete this.storage[i];
		return deleted;
	}

	unshift(data) {
		let duplicate = {};
		duplicate[0] = data;
		Object.keys(this.storage).map((key, i) => {
			duplicate[i+1] = this.storage[i]
		});
		this.storage = {...duplicate}
	}

	shift() { // delete first index of object, then shift values
		if (this.length() === 0) return undefined;
		let deleted = this.storage[0];
		let length = this.length() - 1;
		Object.keys(this.storage).map((key, i) => {
			this.storage[i] = this.storage[i + 1];
		});
		delete this.storage[length];

		return deleted;
	}
}

module.exports = NotAnArray;
