const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeesArray = [];

const collectEmployees = function() {
  while (true) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salary = parseFloat(prompt("Enter employee's salary:"));

    if (firstName && lastName && !isNaN(salary)) {
      employeesArray.push({ firstName, lastName, salary });
    } else {
      alert("Invalid input. Please enter valid data.");
    }

    const continueAdding = confirm("Do you want to add another employee?");
    if (!continueAdding) {
      break;
    }
  }
  
  return employeesArray;
}

const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, emp) => acc + emp.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log('Average Salary:', averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" }));
}

const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

const displayEmployees = function(employeesArray) {
    const employeeTable = document.querySelector('#employee-table');
  
    employeeTable.innerHTML = '';

    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
  
      const newTableRow = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);
  
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);
  
      const salaryCell = document.createElement("td");
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
      });
  
      newTableRow.append(salaryCell);
  
      employeeTable.append(newTableRow);
    }
  }
  
  const trackEmployeeData = function() {
    const employees = collectEmployees();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log('==============================');
  
    getRandomEmployee(employees);
  
    employees.sort(function(a,b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  }
  
  addEmployeesBtn.addEventListener('click', trackEmployeeData);