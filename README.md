# add-as-methods
### Microutil to add bound functions to a JS object

## Installation
```
npm install add-as-methods --save
```

## Usage
#### `addAsMethods(object, ...funcs)`

* `object` an object to augment with some methods
* `funcs` a list of _named_ functions to add to `object` as methods. The magic is simply "pass `this` as the first argument". Other arguments are also preserved (see example).

```js
import addAsMethods from 'add-as-methods';

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

console.log(`My awesome fruit ${awesomeFruit.isBanana() ? 'is' : 'isn\'t'} a banana`);
console.log(`My awesome fruit ${awesomeFruit.isEqual(yourFruit) ? 'is' : 'isn\'t'} the same as yours`);
```

## License
MIT
