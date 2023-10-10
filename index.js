// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
    
  function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date,
    });
    return employee;
  }
  function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date,
    });
    return employee;
  }
  function hoursWorkedOnDate(employee, workDate) {
    const timeIn = employee.timeInEvents.find(event => event.date === workDate);
    const timeOut = employee.timeOutEvents.find(event => event.date === workDate);
    return (timeOut.hour - timeIn.hour) / 100; // Assuming the time is always on the hour
  }
  function wagesEarnedOnDate(employee, workDate) {
    const hoursWorked = hoursWorkedOnDate(employee, workDate);
    return hoursWorked * employee.payPerHour;
  }
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    return datesWorked.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employee, date), 0);
  }
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }
            