import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
      <div className="px-4  text-white">
      <h1 className="font-semibold text-3xl py-6">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
            <div className="flex">
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
      </div>
    );
  };
  export default MovieList;
