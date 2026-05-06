export function showLoading() {
    const status = document.getElementById("status");
    status.textContent = "Loading...";
    status.className = "loading";
}

export function clearLoading() {
    const status = document.getElementById("status");
    status.textContent = "";
    status.className = "";
}

export function showError(message) {
    const status = document.getElementById("status");
    status.textContent = message;
    status.className = "error";
}

export function renderResults(countries) {
    const results = document.getElementById("results");
    results.innerHTML = "";

    countries.forEach((country) => {
        const card = document.createElement("div");
        card.className = "country-card";

        const officialName = country.name?.official || "N/A";
        const capital = country.capital ? country.capital.join(", ") : "N/A";

        let currencyList = "N/A";
        if (country.currencies) {
            currencyList = Object.values(country.currencies)
                .map(currency => `${currency.name} (${currency.symbol || "No symbol"})`)
                .join(", ");
        }

        card.innerHTML = `
            <h2>${officialName}</h2>
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Currencies:</strong> ${currencyList}</p>
        `;

        results.appendChild(card);
    });
}