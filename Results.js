const Results = ({animeList, title, handleDelete}) => {
    return (
        <div className="Results">
            <h1>{title}</h1>
            {animeList.map(anime => (
                <div className="anime-preview" key={anime.id}>
                    <h2>{anime.title}</h2>
                    <button onClick={() => handleDelete(anime.id)}>Remove</button>
                </div>
            ))}
    </div>
    );
};

export default Results;