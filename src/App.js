import Header from "./Header";
import Results from "./Results";
import { useEffect, useState } from "react";

const App = () => {
    const [animeList, setAnimeList] = useState(null);

    const handleDelete = (id) => {
        let newList = animeList.filter(anime => anime.id !== id);
        setAnimeList(newList);
    }

    useEffect(() => {
        fetch('http://localhost:8000/anime')
            .then(res =>{
                return res.json()
            })
            .then(data => {
                console.log(data);
            })
    }, [])

    return (
        <div className="App">
            <Header />
            {/* <Results animeList={animeList} title="All Results" handleDelete={handleDelete}/> */}
        </div>
     );
}
 
export default App;