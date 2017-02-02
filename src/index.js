module.exports = function addAsMethods(object, ...funcs) {
	for (const func of funcs) {
		if (!func.name) {
			throw Error("addAsMethods needs named functions to infer the method name");
		}
		object[func.name] = (...args) => func(object, ...args);
	}

	return object;
}
