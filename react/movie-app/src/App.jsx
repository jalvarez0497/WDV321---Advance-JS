import { use, useState } from 'react';
import './App.css';
import { MovieCard } from './components';

function App() {

  const randomNumber = () => {
    return Math.floor(Math.random() * 100000);
  }

  const [movies, setMovies] = useState(
    [
      {
        id: randomNumber(),
        name: "Inception"
      },
      {
        id: randomNumber(),
        name: "Interstellar"
      }
    ]
  );
  
  const [newMovie, setNewMovie] = useState("");

  const addMovie = () => {
    setMovies([...movies, {id: randomNumber(), name: newMovie}]);
    setNewMovie("");
  }


  return (
    <>
      <h1>Movie Rating</h1>

      <label htmlFor="name">Name: </label>
      <input type="text" id="name" value={newMovie} onChange={(event) => setNewMovie(event.currentTarget.value)}/>

      <button className="add-button" onClick={addMovie}>Add Movie</button>


      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

      

      
    </>
  )
}

export default App
