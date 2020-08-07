

function replaceTempToData(temp, jsonData) {
  var str;
  str = temp.replace(/%\w+%/g, function (all) {
    return jsonData[all] || all;
  });
  return str;
}
function changeJsonKeyToTemplate(_jsonData) {
  var objKeys = Object.keys(_jsonData); // ['id', 'name', 'age']
  var replacementJson = new Object();
  for (var i = 0; i < objKeys.length; i++) {
    var elem = objKeys[i];
    var elemKey = '%' + elem.toUpperCase() + '%';
    var jsonValue = _jsonData[elem];
    replacementJson[elemKey] = jsonValue;
  }
  return replacementJson;
}

function toTemplate(format, employee) {
  if (format) {
    const repJsonData = changeJsonKeyToTemplate(employee);
    const printBody = replaceTempToData(format, repJsonData);
    return printBody;
  } else {
    return null;
  }

}


module.exports = {
  toTemplate
}