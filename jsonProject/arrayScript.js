// JavaScript Document
/*
  This file will:

  - Create a Javascript array containing a list of javascript objects, with each record including another array
  - Convert the Javascript object into a JSON string
  - Store the JSON string into local storage

  Goal: Provide an example of how to create an array of javascript objects
  Goal: Provide an example of how to consume a JSON string in JS

  Use the following data for this:

    student_id = 332443
    student_gpa = 3.6
    student_courses = ["WDV101","WDV131","WDV105"]

    student_id = 545467
    student_gpa = 2.7
    student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205"]

    student_id = 128574
    student_gpa = 3.4
    student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]

    student_id = 750056
    student_gpa = 1.85
    student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205"]
*/

let studentArray = [
    {
        studentID: 332443,
        studentGPA: 3.6,
        studentCourses: ["WDV101", "WDV131", "WDV105"]
    },
    {
        studentID: 545467,
        studentGPA: 2.7,
        studentCourses: ["WDV101", "WDV131", "WDV105", "WDV221", "WDV205"]
    },
    {
        studentID: 128574,
        studentGPA: 3.4,
        studentCourses: ["WDV101", "WDV131", "WDV105", "WDV221", "WDV205", "WDV341"]
    }, 
    {
        studentID: 750056,
        studentGPA: 1.85,
        studentCourses: ["WDV101", "WDV131", "WDV105", "WDV221", "WDV205"]
    }
];

let studentArrayJSON = JSON.stringify(studentArray);
localStorage.setItem("studentArrayData", studentArrayJSON);