// Recipe data
const recipe = {
    name: "Crockpot Chili",
    servings: 6,
    prepTime: 25,
    cookTime: 360,
    ingredients: [
        { qty: 2, unit: "tbsp", name: "cooking oil" },
        { qty: 1, unit: "cup", name: "onion" },
        { qty: 1, unit: "cup", name: "peppers" },
        { qty: 1, unit: "lb", name: "ground beef" }
    ],
    instructions: [
        "Heat oil in skillet",
        "Cook onions and peppers",
        "Add meat and cook",
        "Transfer to crockpot",
        "Cook for 6 hours"
    ]
};

function loadRecipe() {
    const container = document.getElementById("recipeContainer");

    // Clear previous content
    container.innerHTML = "";

    // Title
    const title = document.createElement("h2");
    title.textContent = recipe.name;
    container.appendChild(title);

    // Servings
    const servings = document.createElement("p");
    servings.textContent = "Servings: " + recipe.servings;
    container.appendChild(servings);

    // Prep Time
    const prep = document.createElement("p");
    prep.textContent = "Prep Time: " + recipe.prepTime + " mins";
    container.appendChild(prep);

    // Cook Time
    const cook = document.createElement("p");
    cook.textContent = "Cook Time: " + recipe.cookTime + " mins";
    container.appendChild(cook);

    // Ingredients title
    const ingTitle = document.createElement("h3");
    ingTitle.textContent = "Ingredients";
    container.appendChild(ingTitle);

    // Ingredients list
    const ul = document.createElement("ul");

    for (let i = 0; i < recipe.ingredients.length; i++) {
        const li = document.createElement("li");
        const ing = recipe.ingredients[i];

        li.textContent = ing.qty + " " + ing.unit + " " + ing.name;
        ul.appendChild(li);
    }

    container.appendChild(ul);

    // Instructions title
    const instTitle = document.createElement("h3");
    instTitle.textContent = "Instructions";
    container.appendChild(instTitle);

    // Instructions list
    const ol = document.createElement("ol");

    for (let i = 0; i < recipe.instructions.length; i++) {
        const li = document.createElement("li");
        li.textContent = recipe.instructions[i];
        ol.appendChild(li);
    }

    container.appendChild(ol);
}