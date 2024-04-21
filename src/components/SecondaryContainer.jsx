import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div  className="bg-black">
      <div className="-mt-96 relative z-30">
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular"} movies={movies.popularVideo} />
      </div>
      </div>
    )
  );
};
export default SecondaryContainer;
