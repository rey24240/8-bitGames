window.addEventListener("load", (event) => {
  const gameContainer = document.getElementById("game-container");
  fetch("/assets/json/apps.json")
    .then((response) => response.json())
    .then((apps) => {
      apps.sort((a, b) => a.name.localeCompare(b.name));
      apps.forEach(function (game) {
        let gameHtml;
        gameHtml = `<div class="game">
              <a onclick="${
                game.alert ? `alert('${game.alert}'); ` : ""
              }hire('${game.url}');">
                  <img loading="eager" src="${game.image}">
                  <p class="text">${game.name}</p>
              </a>
            </div>`;
        gameContainer.insertAdjacentHTML("beforeend", gameHtml);
      });

      let searchbar = document.getElementById("searchbar");
      if (searchbar)
        searchbar.placeholder = `Click here to search through our ${apps.length} apps!`;
    });
});
function hire(value) {
  let iframe = document.querySelector(".iframe.active");

  window.navigator.serviceWorker
    .register("/assets/uv/sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      let url = value.trim();
      if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "https://" + url;

      // Pass the encoded url and original url to the second page
      sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
      sessionStorage.setItem("gameUrl", url);
      location.href = "test.html";
    })
  };
