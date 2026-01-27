const teamNames = ["Chiefs","Raiders","Cubs"];
const cookies = ["Chocolate Chip Cookie", "Sugar Cookie", "Peanut Butter Cookie"];
const candies = ["M&Ms","Baby Ruth","Snickers"];

const originalTeams = [...teamNames];


function teamOptions() {
    for (let i = 0; i < teamNames.length; i++) {
        document.write(`<option value="${teamNames[i]}">${teamNames[i]}</option>`);
    }
}

function createProductsArray(productArray) {
    const select = document.getElementById("productDisplay");

    select.length = 1;

    for (let i = 0; i < productArray.length; i++) {
        const option = document.createElement("option");
        option.value = productArray[i];
        option.textContent = productArray[i];
        select.appendChild(option);
    }
}

function chosenCategory() {
    const cookiesRadio = document.getElementById("displayCookies");
    return cookiesRadio.checked ? "cookies" : "candy";
}

function productDropdown() {
    const category = chosenCategory();

    if (category === "cookies") {
        createProductsArray(cookies);
    } else {
        createProductsArray(candies);
    }

    document.getElementById("outputProduct").textContent = "";
    document.getElementById("productDisplay").vale = "none";
}

function changeTeam() {
    const teamSelect = document.getElementById("teamNames");
    document.getElementById("outputName").textContent = teamSelect.value;
}

function productDisplay() {
    const productSelect = document.getElementById("productDisplay");
    const selectedProduct = productSelect.value;

    if (selectedProduct === "none") {
        document.getElementById("outputProduct").textContent = "";
    } else {
        document.getElementById("outputProduct").textContent = selectedProduct;
    }
}

function addTeam() {
    const input = document.getElementById("newTeamName");
    const newName = input.value.trim();

    if (newName === "") {
        alert("Please enter a valid team name.");
        return;
    }

    const select = document.getElementById("teamNames");

    const option = document.createElement("option");
    option.value = newName;
    option.textContent = newName;
    select.appendChild(option);

    select.value = newName;
    document.getElementById("outputName").textContent = newName;

    input.value = "";
}

function reset() {
    const teamSelect = document.getElementById("teamNames");
    teamSelect.length = 1;

    for (let i = 0; i < originalTeams.length; i++) {
        const option = document.createElement("option");
        option.value = originalTeams[i];
        option.textContent = originalTeams[i];
        teamSelect.appendChild(option);
    }

    teamSelect.value = "";
    document.getElementById("outputName").textContent = "";
    document.getElementById("newTeamName").value = "";

    document.getElementById("displayCookies").checked = true;
    productDropdown();
}

window.addEventListener("DOMContentLoaded", () => {

  document.getElementById("teamNames").addEventListener("change", changeTeam);
  document.getElementById("addTeamBtn").addEventListener("click", addTeam);
  document.getElementById("resetBtn").addEventListener("click", reset);


  document.getElementById("productDisplay").addEventListener("change", productDisplay);
  document.getElementById("displayCookies").addEventListener("change", productDropdown);
  document.getElementById("displayCandy").addEventListener("change", productDropdown);


  productDropdown();
});