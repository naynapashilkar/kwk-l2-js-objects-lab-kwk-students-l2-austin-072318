// Write your solution in this file!
var driver = {}

function updateDriverWithKeyAndValue (driver,key,value) {
  return Object.assign({},driver, {[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]=value
  return driver
}

function deleteFromDriverByKey (driver,key) {
  var newObj = Object.assign({}, driver, key);
  delete driver.key
}