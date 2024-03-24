/*
Steps 1-3 READ THE PDF!
*/

(function () {
  let videoGameForm = document.querySelector("#video-game-form");
  let allGameList = document.querySelector(".all-games");
  let allGameListItems = document.querySelectorAll(".all-games li");
  let myGameList = document.querySelector(".my-favourite-games");
  let myGames = [];

  function filterGames(platform) {
    allGameListItems.forEach((element) => {
      const text = element.innerText.toLowerCase();
      if (text.includes(platform)) {
        element.classList.remove("hidden-item");
      } else {
        element.classList.add("hidden-item");
      }
    });
  }

  function renderFavouriteList() {
    myGameList.innerHTML = "";
    myGames.forEach((game) => {
      const listItem = `<li class="list-group-item">${game}</li>`;
      myGameList.innerHTML += listItem;
    });
  }

  function addToFavouriteGames(game) {
    myGames.push(game);
    renderFavouriteList();
  }

  function removeFromFavouriteGames(game) {
    const index = myGames.indexOf(game);
    myGames.splice(index, 1);
    renderFavouriteList();
  }

  // event listener for step 1
  videoGameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let platform = event.target.elements["platform-family"].value.toLowerCase();
    filterGames(platform);
  });

  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener("click", (event) => {
    let game = event.target.innerText;
    addToFavouriteGames(game);
  });

  // event listener for step 3
  myGameList.addEventListener("click", (event) => {
    let favGame = event.target.innerText;
    removeFromFavouriteGames(favGame);
  });
})();
