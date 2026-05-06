document.addEventListener("DOMContentLoaded", () => {
    //console.log("Inside the JS");
    const addStudent = document.getElementById("addStudentBtn");
    const template = document.getElementById("studentTemplate");
    const section = document.querySelector("fieldset section");

    let studentCount = section.querySelectorAll(".studentInputLine").length;

    addStudent.addEventListener("click", (e) => {
        e.preventDefault();

        studentCount++;

        const clone = template.content.cloneNode(true);
        const row = clone.querySelector(".studentInputLine");
        const label = row.querySelectorAll("label");
        const input = row.querySelectorAll("input");
        const nameLabel = `studentName${studentCount}`;
        const idLabel = `studentID${studentCount}`;

        label[0].setAttribute("for", nameLabel);
        input[0].setAttribute("id", nameLabel);
        input[0].setAttribute("name", nameLabel);
        input[0].setAttribute("value", "");

        label[1].setAttribute("for", idLabel);
        input[1].setAttribute("id", idLabel);
        input[1].setAttribute("name", idLabel);
        input[1].setAttribute("value", "");

        section.appendChild(row);
    });
});