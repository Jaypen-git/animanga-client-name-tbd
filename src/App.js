import Header from "./Header";
import Results from "./Results";
import { useEffect, useState } from "react";

const App = () => {
    const [animeList, setAnimeList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/anime')
            .then(res =>{
                if (!res.ok) {
                    throw Error("couldn't fetch the data");
                }
                return res.json()
            })
            .then(data => {
                setAnimeList(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [])

    return (
        <div className="App">
            <Header />
            { error && <div> {error} </div>}
            { isLoading && <div>Loading...</div>}
            { animeList && <Results animeList={animeList} title="All Results" />}
        </div>
     );
}
 
export default App;