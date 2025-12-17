let loadedImages = 0;
let gamesArray = [];
let currentCategory = "All";

window.addEventListener("load", (event) => {
  const gameContainer = document.getElementById("game-container");
  const text = document.getElementById("text");

  try {
    fetch("/assets/json/games.json")
      .then((response) => response.json())
      .then((games) => {
        gamesArray = games;
        games.sort((a, b) => {
          // Special entries first
          if (a.name.startsWith("[!!]")) return -1;
          if (b.name.startsWith("[!!]")) return 1;
          // Then games with badges
          if (a.badge && !b.badge) return -1;
          if (!a.badge && b.badge) return 1;
          // Then alphabetical
          return a.name.localeCompare(b.name);
        });
        const totalImages = games.length;

        games.forEach(function (game, gameNum) {
          let badgeHtml = game.badge ? `<span class="badge">${game.badge}</span>` : '';
          let gameHtml;
          if (game.usesProxy) {
            gameHtml = `<div class="game">
              <a onclick="${
                game.alert ? `alert('${game.alert}'); ` : ""
              }hire('${game.url}');">
                  <img loading="eager" src="${game.image}"
                       onload="handleImageLoad(${totalImages})">
                  <p class="text">${game.name} ${badgeHtml}</p>
              </a>
            </div>`;
          } else {
            gameHtml = `<div class="game">
              <a href="${game.url}" rel="noopener noreferrer" ${
              game.alert ? `onclick="alert('${game.alert}');"` : ""
            }>
                  <img loading="eager" src="${game.image}"
                       onload="handleImageLoad(${totalImages})">
                  <p class="text">${game.name} ${badgeHtml}</p>
              </a>
            </div>`;
          }
          gameContainer.insertAdjacentHTML("beforeend", gameHtml);
          const searchbar = document.getElementById("searchbar");
          if (searchbar)
            searchbar.placeholder = `Click here or type to search through our ${games.length} games!`;
        });

        // Collect unique categories
        const allCategories = new Set();
        games.forEach(game => {
          game.categories.forEach(cat => allCategories.add(cat));
        });

        // Populate the dropdown with categories
        const categorySelector = document.getElementById("category-selector");
        categorySelector.innerHTML = '<option value="All">All Categories</option>';
        Array.from(allCategories).sort().forEach(cat => {
          categorySelector.innerHTML += `<option value="${cat}">${cat}</option>`;
        });

        // Add event listener to category selector
        categorySelector.addEventListener('change', () => {
          currentCategory = categorySelector.value;
          filterGames();
        });

        // Initial filter
        filterGames();
      });
  } catch (error) {
    text.innerHTML = `Error in fetching data<br>${error}`;
    console.error(error);
  }
});

function filterGames() {
  const input = document.getElementById('searchbar').value.toLowerCase();
  const games = document.querySelectorAll('#game-container .game');
  games.forEach((game, index) => {
    const name = game.querySelector('p.text').textContent.toLowerCase();
    const gameData = gamesArray[index];
    const matchesCategory = currentCategory === "All" || gameData.categories.includes(currentCategory);
    const matchesSearch = name.includes(input);
    if (matchesCategory && matchesSearch) {
      game.style.display = 'inline-block';
    } else {
      game.style.display = 'none';
    }
  });
}

function search() {
  filterGames();
}

function handleImageLoad(totalImages) {
  loadedImages++;
  if (loadedImages >= totalImages) {
    text.style.display = "none";
    return;
  }
  text.innerText = `Loading games (${loadedImages}/${totalImages})`;
}