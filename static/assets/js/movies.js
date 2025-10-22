window.addEventListener("load", (event) => {
  const gameContainer = document.getElementById("movie-container");
  fetch("/assets/json/movies.json")
    .then((response) => response.json())
    .then((movies) => {
      movies.sort((a, b) => a.name.localeCompare(b.name));
      movies.forEach(function (movie) {
        let gameHtml;
        gameHtml = `<div class="movie">
              <a onclick="${
                movie.alert ? `alert('${movie.alert}'); ` : ""
              }hire('${movie.url}');">
                  <img loading="eager" src="${movie.image}">
                  <p class="text">${movie.name}</p>
              </a>
            </div>`;
        gameContainer.insertAdjacentHTML("beforeend", gameHtml);
      });

      let searchbar = document.getElementById("searchbar");
      if (searchbar)
        searchbar.placeholder = `Click here to search through our ${movies.length} apps!`;
    });
});
