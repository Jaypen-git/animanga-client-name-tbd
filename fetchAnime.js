const fetchAnime = async (anime) => {
    let request = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}`);

    if (request.status !== 200) {
        throw new Error('Could not fetch the data');
    }

    const response = await request.json();

    return response;
}

export default fetchAnime;