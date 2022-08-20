import useFetch from "./useFetch";
import Results from "./Results";

const Home = () => {
    let {data: animeList, isLoading, error} = useFetch('http://localhost:8000/anime');

    return (
        <div className="Home">
            { error && <div> {error} </div>}
            { isLoading && <div>Loading...</div>}
            { animeList && <Results animeList={animeList} title="Your List" />}
        </div>
     );
}
 
export default Home;