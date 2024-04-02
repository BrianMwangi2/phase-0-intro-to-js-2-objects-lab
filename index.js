// Initialize the employee object
let employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};

// Function to update employee Object without mutation
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// Function to update employee Object with mutation
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete property from employee Object without mutation
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete property from employee Object with mutation
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage:
console.log("Original employee:", employee);

// Non-destructive update
const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log("Updated employee (non-destructive):", updatedEmployee1);

// Destructive update
const updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St");
console.log("Updated employee (destructive):", updatedEmployee2);

// Non-destructive deletion
const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
console.log("Employee without name (non-destructive):", employeeWithoutName);

// Destructive deletion
const employeeWithoutAddress = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without street address (destructive):", employeeWithoutAddress);

// Original object remains unchanged
console.log("Original employee (unchanged):", employee);
