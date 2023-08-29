//creating each card to display the games
const createGamesDisplay = (thumbnail, title) => {
    const catUl = document.querySelector("#catagList");
    const catLi = document.createElement("li");
    const catImg = document.createElement("img");
    const catH3 = document.createElement("h3");
    
    catLi.className = "gameCard";
    catImg.className = "img"
    catH3.className = "cardH3"
    catImg.src = thumbnail;
    catH3.textContent = title;
    catLi.append(catImg, catH3)
    catUl.append(catLi)
}

const displayGame = async () => {
    try {
        const gameRes = await fetch(gamesUrl, options);
        const games = await gameRes.json();
        for(let i = 0; i < games.length; i ++){
            createGamesDisplay(games[i].thumbnail, games[i].title)
        }
    } catch (error) {
        console.error(error);
    }
}

displayGame()  

//event when clicking on a card(not working yet)
document.querySelector(".gameCard").addEventListener("click", (e) => {
    console.log("you clicked me")
})