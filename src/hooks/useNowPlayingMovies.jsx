import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
  
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    const results = json.results;
    dispatch(addNowPlayingMovies(results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
