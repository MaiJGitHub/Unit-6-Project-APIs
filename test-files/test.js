const gamesUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb7c281af5mshed3ac801f114632p183454jsn726a4e5c6429',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

const musicUrl = 'https://player.fm/featured/true-crime.json?episode_detail=full'


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