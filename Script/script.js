const movies = [
    "Night",
    "Card",
    "Great StarSword",
    "Time",
    "Grave",
    "Castle on the Moon"   
];

// Get DOM elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

// Function to handle search
function searchMovies() {
    // Clear previous search results
    searchResults.innerHTML = "";

    // Get search query
    const query = searchInput.value.toLowerCase();

    // Filter movies that match the query
    const matchingMovies = movies.filter(movie =>
        movie.toLowerCase().includes(query)
    );

    // Display matching movies
    matchingMovies.forEach(movie => {
        const movieElement = document.createElement("p");
        movieElement.textContent = movie;
        searchResults.appendChild(movieElement);
    });
}

// Attach event listeners
searchButton.addEventListener("click", searchMovies);
searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchMovies();
    }
});