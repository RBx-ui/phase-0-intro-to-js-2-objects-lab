// Write your solution in this file!
// Step 1: Assign an "employee" variable to an object

const employee = {
    name1: "Rob",
    streetAddress: "11 Broadway",
  };
  
  // Step 2: Create the "updateEmployeeWithKeyAndValue" function

  function updateEmployeeWithKeyAndValue(object, key, value) {
    // Create a new object by cloning the original object using the spread operator
    const updatedEmployee = { ...object };
    
    // Update the value for the given key in the new object
    updatedEmployee[key] = value;
    
    // Return the new object with the updated value
    return updatedEmployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

  const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "11 Kirkeveien");

  function deleteFromEmployeeByKey(obj, key, value) {
    const nyEmployee = {...obj};
    nyEmployee[key] = value;
    return nyEmployee;
  }

  const nyEmployee = deleteFromEmployeeByKey(employee, "Tyler", "15 Main");

  function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;
  }

  const finalEmployee = (employee, "Chloe", "17 Pearl");
  