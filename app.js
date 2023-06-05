//MEDIUM----------

//Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
//Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto)

// const { readFile } = require("fs");

// const fs = require("fs");

// const first = readFile("./planets.txt", "utf8");
// console.log(first);

//===========================
// const planets = result;
// console.log(result);
// readFile("./planets.txt", "utf8",(err, result)=>{
//  if (err) {
//       console.log(err);
//       return

// } )

const fs = require("fs"); //setting up and pulling fileSystem
fs.readFile("planets.txt", "utf8", (err, result) => {
  //question to self: is it better to use data instead of result
  if (err) throw err;

  console.log(result);
});

//=====================================HARD===============================================================

//Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.

const express = require("express");
const app = express();

//getting employee information from the json file
app.get("/hard", (req, res) => {
  const employeeInformation = require("./hard.json");
  res.json(employeeInformation.allEmployees);
});

//setting up an end point to get the employeeID
app.get("/hard/:EmployeeID", (req, res) => {
  const employeeID = parseInt(req.params.EmployeeID);

  const employeeInformation = require("./hard.json");
  const employee = employeeInformation.allEmployees.find(
    (emp) => emp.EmployeeID === employeeID
  );

  //conditional used to handle errors
  if (employee) {
    res.json(employee);
  } else {
    //error code that will appear
    res.status(404).json({ error: "No employee found." });
  }
});
//must be located outside of the code and at the bottom.
app.listen(3002, () => console.log("Listening on port 3002..."));

// To view all employees http://localhost:3002/hard
//For specific employees by ID http://localhost:3002/hard/{employeeID}
