function getObjectWithOnlyValue(objct){
    let obj = new Object();
    Object.keys(objct).forEach(element => {
        if (objct[element] !== 'null') {
            obj[element] = objct[element]
        }
    });
    return obj;
}

module.exports = {
    notNullObjects: getObjectWithOnlyValue
}