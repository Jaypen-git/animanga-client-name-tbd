const fetchAnime = async (anime) => {
    let response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}`);

    if (!response.ok) {
        throw Error('Could not fetch the data');
    }

    const data = await response.json();

    return data;
}

export default fetchAnime;