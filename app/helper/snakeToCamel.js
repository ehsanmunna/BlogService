
const convertToCamelCase = (value) => {
	value = value.replace(/[\(\)\[\]\{\}\=\?\!\.\:,\-_\+\\\"#~\/]/g, " ");
	var returnValue = "";
	var makeNextUppercase = true;
	value = value.toLowerCase();
	for (var i = 0; value.length > i; i++) {
        if(i == 0){
            makeNextUppercase = false
        }
		var c = value.charAt(i);
		if (c.match(/^\s+$/g) || c.match(/[\(\)\[\]\{\}\\\/]/g)) {
			makeNextUppercase = true;
		} else if (makeNextUppercase) {
			c = c.toUpperCase();
			makeNextUppercase = false;
		}
		returnValue += c;
	}
	return returnValue.replace(/\s+/g, "");
}

const convertObectKeysToCamelCase = (object) => {
	const objKeys = Object.keys(object);
	const obj = new Object();
	for (let i = 0; i < objKeys.length; i++) {
		const element = objKeys[i]; // EMPLOYEE_ID
		const elementCamel = convertToCamelCase(objKeys[i]); // employeeId
		obj[elementCamel] = object[element];
	}
	return obj;
}

const convertArrayObectKeysToCamelCase = (arrayData) => {
	const list = [];
	for (let i = 0; i < arrayData.length; i++) {
		const element = arrayData[i]; // EMPLOYEE_ID
		list.push(
			convertObectKeysToCamelCase(element)
		)
	}
	return list;
}

module.exports = {
    convertToCamelCase: convertToCamelCase,
    convertObectKeysToCamelCase: convertObectKeysToCamelCase,
    convertArrayObectKeysToCamelCase: convertArrayObectKeysToCamelCase
}