// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // employee is received
  // initialize the bonus at 0
  let workingBonus = 0;
  let rating = employee.reviewRating;
  // calculate the initial bonus percentage for that employee
  // If rating 2 or lower, 0
    if (rating <= 2){
    workingBonus = 0;
    }
    // IF rating 3, 4%
    else if (rating === 3){
    workingBonus = .04;
    }
   // IF rating 4, 6%
    else if(rating === 4){
    workingBonus = .06;
    }
    // IF rating 5, 10%
    else if(rating === 5){
      workingBonus = .10;
    }
  // calculate the 15yr+ bonus which is 5%
  if (employee.employeeNumber.length === 4){
    workingBonus = workingBonus + .05;
  }
  // calculate the sal>65000 penalty, -1%
  if (employee.annualSalary > 65000){
    workingBonus = workingBonus - .01;
  }
  // check if bonus is too high (>13%) or too low (< 0%) and adjust
  if (workingBonus > .13){
    workingBonus = .13;
  }
  else if (workingBonus < 0){
    workingBonus = 0;
  }
  let bonusResult = {
    name: employee.name,
    bonusPercentage: workingBonus, 
    totalCompensation: Number(employee.annualSalary) * workingBonus + Number(employee.annualSalary), 
    totalBonus: Number(employee.annualSalary) * workingBonus
  }
  return bonusResult;
  }  

  for (let member of employees){
    console.log(calculateIndividualEmployeeBonus(member));
  }
//   let atticus = employees[4];
// console.log(calculateIndividualEmployeeBonus(atticus));





  
  
  // return new object with bonus results

