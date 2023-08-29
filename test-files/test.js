const showApi = async () => {
    try {
        const gameRes = await fetch(gamesUrl, options);
        const games = await gameRes.json();
        console.log(games);
        
        const musicRes = await fetch(musicUrl)
        const musics = await musicRes.json()
        console.log(musics)
    } catch (error) {
        console.error(error);
    }
}

showApi()