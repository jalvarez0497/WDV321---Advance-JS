export async function fetchData() {
    const url = "https://restcountries.com/v3.1/all?fields=name,capital,currencies";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error("Unable to fetch country data. Please try again later.");
    }
}