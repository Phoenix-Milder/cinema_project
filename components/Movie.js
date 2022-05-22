import{ FaTimes } from 'react-icons/fa'

const Movie = ({movie, onDelete}) =>{
return (
  <div className = "movie">
    <h3>{movie.title} <FaTimes style={{cursor: 'pointer'}} onClick={() => onDelete(movie.id)}/></h3>
    <p>Director: {movie.director} <br/> Main Actor: {movie.actors}</p>

  </div>
)
}

export default Movie
