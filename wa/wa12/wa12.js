// Problem 1

const employees = [
  {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
  },
  {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
  },
  {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
  },
];

console.log("Initial company JSON:", employees);

// Problem 2
const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees,
};

console.log("Company JSON:", company);

// Problem 3
const newEmployee = {
  firstName: "Anna",
  department: "Tech",
  designation: "Executive",
  salary: 25600,
  raiseEligible: false,
};
employees.push(newEmployee);

console.log("Employees after adding new employee:", employees);
console.log("Company JSON after adding new employee:", company);

// Problem 4
const totalSalary = company.employees.reduce(
  (acc, employee) => acc + employee.salary,
  0
);
console.log("Total company salary:", totalSalary);

// Problem 5
function giveRaises(company) {
  company.employees.forEach((employee) => {
    if (employee.raiseEligible) {
      employee.salary *= 1.1;
      employee.raiseEligible = false;
    }
  });
  console.log("Salaries updated after raises:", company.employees);
}

giveRaises(company);

// Problem 6
const workingFromHome = ["Anna", "Sam"];
company.employees.forEach((employee) => {
  if (workingFromHome.includes(employee.firstName)) {
    employee.wfh = true;
  } else {
    employee.wfh = false;
  }
});

console.log("Company JSON after updating work from home status:", company);
