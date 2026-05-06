// JavaScript Document
/*
  This file will:
  - Create a Javascript object
  - Convert the Javascript object into a JSON object
  - Store the JSON object into local storage

  Goal: Provide an example of how to create JSON objects in Javascript
  Goal: Provide an example of how to consume JSON objects in Javascript

  Use the following data for your JSON object

    student_id = 332443
    student_gpa = 3.6
    student_courses = ["WDV101","WDV131","WDV105"]

*/

// Creating a JS object
let studentObj = {
    studentID: 332443,
    studentGPA: 3.6,
    studentCourses: ["WDV101", "WDV131", "WDV105"]
};

// Converting the JS object into a JSON string
let studentJSON = JSON.stringify(studentObj);

//Storing the JSON string into local storage
localStorage.setItem("studentData", studentJSON);