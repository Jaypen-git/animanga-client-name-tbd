import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from "./Nav";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Nav />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </Router>
     );
}
 
export default App;