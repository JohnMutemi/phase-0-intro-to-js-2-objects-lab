// Write your solution in this file!
let employee={
    name:"Mouffat",
    streetAddress: "017 Panama"
}

//updateEmployeeWithKeyAndValue
function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    return { ...employeeObject, [key]: value };
    }
const newEmployee=updateEmployeeWithKeyAndValue(employee, "name", "Sam", "streetAddress", "11 Broadway");

//destructivelyUpdateEmployeeWithKeyAndValue
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject [key]=value;
    return employeeObject;
}
const newEmployeeAddress=destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

// deleteFromEmployeeByKey
function deleteFromEmployeeByKey(employeeObject, key){
    return{...employeeObject, [key]:undefined};

}
const newEmployeeDetails=deleteFromEmployeeByKey(employee, "name");

//destructivelyDeleteFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employeeObject[key];
    return employeeObject;
}

const deletedKeyDetails= destructivelyDeleteFromEmployeeByKey(employee,"name" );
