const container = document.getElementById("formContainer");

//Creating a Form Element
const form = document.createElement("form");

// Form Dropdown

// Reason for Contact Label and Dropdown
const contactReason = document.createElement("label");
contactReason.textContent = "Reason for Contact: ";
form.appendChild(contactReason);

const select = document.createElement("select");

const defaultOption = document.createElement("option");
defaultOption.textContent = "Select a reason";
defaultOption.value = "";
select.appendChild(defaultOption);

// Dropdown Options
const option1 = document.createElement("option");
option1.textContent = "General Question";
option1.value = "General Question";
select.appendChild(option1);

const option2 = document.createElement("option");
option2.textContent = "Project Inquiry";
option2.value = "Project Inquiry";
select.appendChild(option2);

const option3 = document.createElement("option");
option3.textContent = "Internship Opportunity";
option3.value = "Internship Opportunity";
select.appendChild(option3);

const option4 = document.createElement("option");
option4.textContent = "Other";
option4.value = "Other";
select.appendChild(option4);

form.appendChild(select);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// Radio btn section
const radioLabel = document.createElement("h3");
radioLabel.textContent = "Preferred Contact Method: ";
form.appendChild(radioLabel);

const contactMethods = ["Email", "Phone", "Text"];

contactMethods.forEach(method => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "contactMethod";
    radio.value = method;

    const label = document.createElement("label");
    label.textContent = method;

    form.appendChild(radio);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
});

// Submit btn 
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.type = "submit";
form.appendChild(document.createElement("br"));
form.appendChild(submitBtn);

// Results Div formatting
const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "20px";
resultDiv.style.padding = "15px";
resultDiv.style.border = "1px solid #ccc";
resultDiv.style.borderRadius = "8px";
resultDiv.style.backgroundColor = "#f9f9f9";

container.appendChild(form);
container.appendChild(resultDiv);

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const selectedReason = select.value;
    const selectedMethod = document.querySelector('input[name="contactMethod"]:checked');

    if(!selectedReason || !selectedMethod) {
        resultDiv.textContent = "Please select a reason and a contact method.";
        return;
    }

    resultDiv.textContent = `You selected: ${selectedReason} and prefer to be contacted via ${selectedMethod.value}. Thank you for reaching out!`;
})