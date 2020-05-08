var myObject = {prop: "1"}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value
 return object
}