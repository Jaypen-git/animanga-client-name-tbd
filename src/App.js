import Header from "./Header";
import Results from "./Results";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const App = () => {
    let {data: animeList, isLoading, error} = useFetch('http://localhost:8000/anime');

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