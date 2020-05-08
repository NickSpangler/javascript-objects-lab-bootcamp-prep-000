var myObject = {prop: "1"}

function destrucivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value
 return object
}