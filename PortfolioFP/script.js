// Default recipes that are always available when the page loads
const defaultRecipes = [
    {
        name: "Arroz con Gandules",
        servings: 6,
        prepTime: 20,
        cookTime: 45,
        difficulty: "Medium",
        image: "images/arroz-gandules.jpg",
        ingredients: [
            { qty: 2, unit: "cups", name: "rice" },
            { qty: 1, unit: "can", name: "gandules" },
            { qty: 3, unit: "tbsp", name: "sofrito" },
            { qty: 1, unit: "packet", name: "sazon" },
            { qty: 2, unit: "cups", name: "water" },
            { qty: 1, unit: "tbsp", name: "olive oil" },
            { qty: 0.5, unit: "cup", name: "tomato sauce" }
        ],
        instructions: [
            "Heat olive oil in a pot.",
            "Add sofrito and tomato sauce.",
            "Mix in gandules and seasoning.",
            "Add water and bring to a boil.",
            "Stir in rice.",
            "Cover and cook on low heat for 25 minutes.",
            "Fluff rice before serving."
        ]
    },
    {
        name: "Mofongo",
        servings: 4,
        prepTime: 15,
        cookTime: 25,
        difficulty: "Medium",
        image: "images/mofongo.jpg",
        ingredients: [
            { qty: 3, unit: "", name: "green plantains" },
            { qty: 3, unit: "cloves", name: "garlic" },
            { qty: 4, unit: "pieces", name: "fried pork" },
            { qty: 2, unit: "tbsp", name: "olive oil" },
            { qty: 1, unit: "tsp", name: "salt" }
        ],
        instructions: [
            "Peel and slice plantains.",
            "Fry plantains until golden.",
            "Mash garlic and salt together.",
            "Combine fried plantains with garlic mixture.",
            "Mash everything until combined.",
            "Shape into bowls and serve with pork."
        ]
    },
    {
        name: "Pastelón",
        servings: 6,
        prepTime: 30,
        cookTime: 45,
        difficulty: "Hard",
        image: "images/pastelon.jpg",
        ingredients: [
            { qty: 4, unit: "", name: "sweet plantains" },
            { qty: 1, unit: "lb", name: "ground beef" },
            { qty: 1, unit: "cup", name: "shredded cheese" },
            { qty: 2, unit: "tbsp", name: "sofrito" },
            { qty: 1, unit: "packet", name: "sazon" },
            { qty: 0.5, unit: "cup", name: "tomato sauce" }
        ],
        instructions: [
            "Slice and fry sweet plantains.",
            "Cook ground beef with sofrito and seasoning.",
            "Layer plantains in baking dish.",
            "Add beef and cheese.",
            "Repeat layers.",
            "Bake for 30 minutes at 350 degrees."
        ]
    }
];

let editIndex = -1;

// Gets saved recipes from localStorage.
// If there are no saved recipes, it starts with an empty array.
let storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

// Combines the default recipes with any recipes the user added.
let recipes = [...defaultRecipes, ...storedRecipes];

// Displays the recipe buttons/list on the page
function displayRecipeList() {
    const recipeList = document.getElementById("recipeList");

    // Clears the current recipe list before rebuilding it
    recipeList.innerHTML = "";

    // Loops through all recipes and creates a button for each one
    for (let i = 0; i < recipes.length; i++) {
        const button = document.createElement("button");
        button.textContent = recipes[i].name;

        // When a recipe button is clicked, display that recipe
        button.addEventListener("click", function () {
            displayRecipe(i, 1);
        });

        recipeList.appendChild(button);
    }
}

// Displays one selected recipe on the page
// index = which recipe to display
// multiplier = used for half, normal, or double portions
function displayRecipe(index, multiplier = 1) {
    const recipe = recipes[index];
    const container = document.getElementById("recipeContainer");

    // Clears the selected recipe area before displaying a new recipe
    container.innerHTML = "";

    // Creates and displays the recipe title
    const title = document.createElement("h2");
    title.textContent = recipe.name;
    container.appendChild(title);

    // Creates and displays the recipe image
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;
    recipeImage.className = "recipe-image";
    container.appendChild(recipeImage);

    // Creates a delete button for the selected recipe
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Recipe";

    // Deletes the selected recipe, saves changes, and refreshes the display
    deleteBtn.addEventListener("click", function () {
        recipes.splice(index, 1);
        saveRecipes();

        displayRecipeList();
        displayRecipe(0, 1);
    });

    container.appendChild(deleteBtn);

    // Creates an edit button for the selected recipe
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Recipe";

    editBtn.addEventListener("click", function () {
        editIndex = index;

        document.getElementById("recipeName").value = recipe.name;
        document.getElementById("recipeServings").value = recipe.servings;
        document.getElementById("recipePrep").value = recipe.prepTime;
        document.getElementById("recipeCook").value = recipe.cookTime;
        document.getElementById("recipeDifficulty").value = recipe.difficulty;
        document.getElementById("recipeImage").value = recipe.image;

        // Clear current ingredient inputs
        const ingredientInputs = document.getElementById("ingredientInputs");
        ingredientInputs.innerHTML = "";

        // Rebuild ingredient inputs
        for (let i = 0; i < recipe.ingredients.length; i++) {

            const qtyInput = document.createElement("input");
            qtyInput.type = "number";
            qtyInput.step = "0.01";
            qtyInput.className = "ingredientQty";
            qtyInput.placeholder = "Qty";
            qtyInput.value = recipe.ingredients[i].qty;

            const unitInput = document.createElement("input");
            unitInput.type = "text";
            unitInput.className = "ingredientUnit";
            unitInput.placeholder = "Unit";
            unitInput.value = recipe.ingredients[i].unit;

            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.className = "ingredientName";
            nameInput.placeholder = "Ingredient";
            nameInput.value = recipe.ingredients[i].name;

            ingredientInputs.appendChild(qtyInput);
            ingredientInputs.appendChild(unitInput);
            ingredientInputs.appendChild(nameInput);
        }

        // Clear current instruction inputs
        const instructionInputs = document.getElementById("instructionInputs");
        instructionInputs.innerHTML = "";

        // Rebuild instruction inputs
        for (let i = 0; i < recipe.instructions.length; i++) {

            const stepInput = document.createElement("input");
            stepInput.type = "text";
            stepInput.className = "instructionStep";
            stepInput.placeholder = "Instruction step";
            stepInput.value = recipe.instructions[i];

            instructionInputs.appendChild(stepInput);
        }

        document.getElementById("recipeForm").scrollIntoView();
    });

    container.appendChild(editBtn);

    // Displays servings and updates the number based on the multiplier
    const servings = document.createElement("p");
    servings.textContent = "Servings: " + recipe.servings * multiplier;
    container.appendChild(servings);

    // Displays preparation time
    const prep = document.createElement("p");
    prep.textContent = "Prep Time: " + recipe.prepTime + " mins";
    container.appendChild(prep);

    // Displays cooking time
    const cook = document.createElement("p");
    cook.textContent = "Cook Time: " + recipe.cookTime + " mins";
    container.appendChild(cook);

    // Displays difficulty level
    const difficulty = document.createElement("p");
    difficulty.textContent = "Difficulty: " + recipe.difficulty;
    container.appendChild(difficulty);

    // Portion control section title
    const portionTitle = document.createElement("h3");
    portionTitle.textContent = "Change Portion";
    container.appendChild(portionTitle);

    // Half portion button
    const halfButton = document.createElement("button");
    halfButton.textContent = "Half";
    halfButton.addEventListener("click", function () {
        displayRecipe(index, 0.5);
    });
    container.appendChild(halfButton);

    // Normal portion button
    const normalButton = document.createElement("button");
    normalButton.textContent = "Normal";
    normalButton.addEventListener("click", function () {
        displayRecipe(index, 1);
    });
    container.appendChild(normalButton);

    // Double portion button
    const doubleButton = document.createElement("button");
    doubleButton.textContent = "Double";
    doubleButton.addEventListener("click", function () {
        displayRecipe(index, 2);
    });
    container.appendChild(doubleButton);

    // Ingredients section title
    const ingTitle = document.createElement("h3");
    ingTitle.textContent = "Ingredients";
    container.appendChild(ingTitle);

    // Button to show or hide ingredients
    const toggleIngredientsButton = document.createElement("button");
    toggleIngredientsButton.textContent = "Show / Hide Ingredients";
    container.appendChild(toggleIngredientsButton);

    // Creates the ingredients list and hides it by default
    const ul = document.createElement("ul");
    ul.style.display = "none";

    // Loops through ingredients and updates quantities based on the multiplier
    for (let i = 0; i < recipe.ingredients.length; i++) {
        const li = document.createElement("li");
        const ing = recipe.ingredients[i];

        const newQty = ing.qty * multiplier;

        li.textContent = newQty + " " + ing.unit + " " + ing.name;
        ul.appendChild(li);
    }

    // Toggles the ingredients list open and closed
    toggleIngredientsButton.addEventListener("click", function () {
        if (ul.style.display === "none") {
            ul.style.display = "block";
        } else {
            ul.style.display = "none";
        }
    });

    container.appendChild(ul);

    // Instructions section title
    const instTitle = document.createElement("h3");
    instTitle.textContent = "Instructions";
    container.appendChild(instTitle);

    // Button to show or hide instructions
    const toggleInstructionsButton = document.createElement("button");
    toggleInstructionsButton.textContent = "Show / Hide Instructions";
    container.appendChild(toggleInstructionsButton);

    // Creates the instructions list and hides it by default
    const ol = document.createElement("ol");
    ol.style.display = "none";

    // Loops through the instructions and creates one list item per step
    for (let i = 0; i < recipe.instructions.length; i++) {
        const li = document.createElement("li");
        li.textContent = recipe.instructions[i];
        ol.appendChild(li);
    }

    // Toggles the instructions list open and closed
    toggleInstructionsButton.addEventListener("click", function () {
        if (ol.style.display === "none") {
            ol.style.display = "block";
        } else {
            ol.style.display = "none";
        }
    });

    container.appendChild(ol);

}

// Runs when the page loads
// Shows the recipe list and displays the first recipe by default
displayRecipeList();
displayRecipe(0, 1);

// Gets the form and form buttons from the HTML
const recipeForm = document.getElementById("recipeForm");
const addIngredientBtn = document.getElementById("addIngredientBtn");
const addInstructionBtn = document.getElementById("addInstructionBtn");

// Adds another set of ingredient inputs when the user clicks Add Ingredient
addIngredientBtn.addEventListener("click", function () {
    const ingredientInputs = document.getElementById("ingredientInputs");

    // Creates input fields for quantity, unit, and ingredient name
    const qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.step = "0.01";
    qtyInput.className = "ingredientQty";
    qtyInput.placeholder = "Qty";

    const unitInput = document.createElement("input");
    unitInput.type = "text";
    unitInput.className = "ingredientUnit";
    unitInput.placeholder = "Unit";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "ingredientName";
    nameInput.placeholder = "Ingredient";

    ingredientInputs.appendChild(qtyInput);
    ingredientInputs.appendChild(unitInput);
    ingredientInputs.appendChild(nameInput);
});

// Adds another instruction input when the user clicks Add Instruction
addInstructionBtn.addEventListener("click", function () {
    const instructionInputs = document.getElementById("instructionInputs");

    // Creates an input field for the instruction step
    const stepInput = document.createElement("input");
    stepInput.type = "text";
    stepInput.className = "instructionStep";
    stepInput.placeholder = "Instruction step";

    instructionInputs.appendChild(stepInput);
});

// Handles the form submit when the user saves a new recipe
recipeForm.addEventListener("submit", function (event) {
    // Prevents the page from refreshing
    event.preventDefault();

    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    // Gets the basic recipe information from the form
    const name = document.getElementById("recipeName").value;
    const servings = Number(document.getElementById("recipeServings").value);
    const image = document.getElementById("recipeImage").value;
    const prepTime = Number(document.getElementById("recipePrep").value);
    const cookTime = Number(document.getElementById("recipeCook").value);
    const difficulty = document.getElementById("recipeDifficulty").value;

    // Basic validation for required recipe information
    if (name === "" || servings <= 0 || prepTime < 0 || cookTime < 0) {
        errorMessage.textContent = "Please fill out the recipe information.";
        return;
    }

    // Gets all ingredient input fields
    const qtyInputs = document.getElementsByClassName("ingredientQty");
    const unitInputs = document.getElementsByClassName("ingredientUnit");
    const nameInputs = document.getElementsByClassName("ingredientName");

    const newIngredients = [];

    // Builds the ingredients array from the form inputs
    for (let i = 0; i < qtyInputs.length; i++) {
        const qty = Number(qtyInputs[i].value);
        const unit = unitInputs[i].value;
        const ingName = nameInputs[i].value;

        if (qty > 0 && ingName !== "") {
            newIngredients.push({
                qty: qty,
                unit: unit,
                name: ingName
            });
        }
    }

    // Gets all instruction inputs
    const stepInputs = document.getElementsByClassName("instructionStep");
    const newInstructions = [];

    // Builds the instructions array from the form inputs
    for (let i = 0; i < stepInputs.length; i++) {
        if (stepInputs[i].value !== "") {
            newInstructions.push(stepInputs[i].value);
        }
    }

    // Makes sure the recipe has at least one ingredient and one instruction
    if (newIngredients.length === 0 || newInstructions.length === 0) {
        errorMessage.textContent = "Please add at least one ingredient and one instruction.";
        return;
    }

    // Creates a new recipe object using the form data
    const newRecipe = {
        name: name,
        servings: servings,
        prepTime: prepTime,
        cookTime: cookTime,
        difficulty: difficulty,
        image: image,
        ingredients: newIngredients,
        instructions: newInstructions
    };

    // Adds the new recipe to the recipes array
    if (editIndex === -1) {
        recipes.push(newRecipe);
    } else {
        recipes[editIndex] = newRecipe;
        editIndex = -1;
    }

    // Saves the user added recipe to localStorage
    saveRecipes();

    // Refreshes the recipe list and displays the newly added recipe
    displayRecipeList();
    displayRecipe(0, 1);

    // Clears the form after saving
    recipeForm.reset();
});

// Saves only the user-added recipes to localStorage
// Default recipes are not saved because they already exist in the code
function saveRecipes() {
    const userRecipes = recipes.slice(defaultRecipes.length);
    localStorage.setItem("recipes", JSON.stringify(userRecipes));
}