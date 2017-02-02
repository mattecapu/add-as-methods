import assert from 'assert';

import addAsMethods from './index.js';

function isEqual(fruit, anotherFruit) {
	return fruit.name === anotherFruit.name;
}
function isBanana(fruit) {
	return fruit.name === 'banana';
}

let awesomeFruit = {
	name: 'banana',
	awesome: true
};
let yourFruit = {
	name: 'apple',
	awesome: false
};

/* augment it */
awesomeFruit = addAsMethods(awesomeFruit, isEqual, isBanana);

assert(
	awesomeFruit.isBanana(),
	`awesomeFruit should be a banana`
);
assert(
	!awesomeFruit.isEqual(yourFruit),
	`awesomeFruit shouldn't be your fruit`
)
