import { fetchData } from "./api.js";
import { showLoading, clearLoading, showError, renderResults } from "./ui.js";

const button = document.getElementById("search-button");

button.addEventListener("click", async () => {
    try {
        showLoading();

        const data = await fetchData();

        clearLoading();

        const firstTwentyCountries = data.slice(0, 20);
        renderResults(firstTwentyCountries);
    } catch (error) {
        clearLoading();
        showError(error.message);
    }
});