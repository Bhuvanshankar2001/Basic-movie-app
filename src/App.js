import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import Movies from "./Movie.json"
function App() {
  return (
    <div className="App">
    <Header />
    <div className="Movie-div">
    {
      Movies.map((el)=>{
        return(
          <Movie title={el.Title} year = {el.Year} img={el.Poster} key={el.imdbID} />
        )
      })
    }
    </div>
    </div>
  );
}

export default App;
