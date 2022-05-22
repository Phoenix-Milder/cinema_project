import { useState } from 'react'
import Header from "./components/Header"
import Movies from "./components/Movies"
import AddMovies from "./components/AddMovie"
const App = () => {
  const[movies, setMovies] = useState([
    {
    id: 1,
    title: "Kill Bill",
    director: "Q. Tarantino",
    length: "01:51",
    actors: "Uma Turman"
    },
    {
    id: 2,
    title: "Se7en",
    director: "D. Fincher",
    length: "02:07",
    actors: "Brad Pitt"
    },
    {
    id: 3,
    title: "Fight Club",
    director: "D. Fincher",
    length: "02:19",
    actors: "Edward Norton"
    },
    {
    id: 4,
    title: "Lighthouse",
    director: "R. Eggers",
    length: "01:50",
    actors: "Robert Pattinson"
    },
  ])
// Add Movie
const addMovie = (movie) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newMovie = {id, ...movie}
  setMovies([...movies, newMovie])
}


// Delete Movie
  const deleteMovie = (id) =>{
    setMovies(movies.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
    <Header/>
    <AddMovies onAdd={addMovie}/>
    {movies.length > 0 ? (
      <Movies movies ={movies}
      onDelete={deleteMovie} />
    ) : (
      "No Movies in Cinema"
    )
  }
    </div>
  );
}

export default App;
