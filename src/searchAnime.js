import fetchAnime from "./fetchAnime";

const searchAnime = () => {
    let query = document.querySelector('#search_query').value
    fetchAnime(query)
        .then(response => {
            response.data.forEach(result => {
                console.log(result.title);
            })
        });
}

export default searchAnime;