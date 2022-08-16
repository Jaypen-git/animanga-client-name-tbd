import searchAnime from "./searchAnime";

const Header = () => {
    return (
        <header>
            <h1 className="title">Animanga Client</h1>
            <input type="text" name="search_query" id="search_query" />
            <button onClick={searchAnime}>Search</button>
        </header>
    );
};

export default Header;