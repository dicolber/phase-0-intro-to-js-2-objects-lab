const employee = { 
    name : "Shonda",
    streetAddress : {
        line1: "1515 Main Street",
        line2: "Apt 15"
    }
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    obj.name = "Sam"
    return obj
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value
    delete newObj.key
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object

}
