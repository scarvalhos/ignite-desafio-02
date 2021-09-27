import { MovieProps, GenreResponseProps } from '../App'
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content({movies, selectedGenre}: ContentProps) {
  return (
    <div className="container">
        <Header selectedGenre={selectedGenre} />
        
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}