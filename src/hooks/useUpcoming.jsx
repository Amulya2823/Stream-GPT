import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies)
  
  const getUpcoming = async () => {
    const data = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    const results = json.results;
    dispatch(addUpcomingMovies(results));
  };

  useEffect(() => {
   !upcomingMovies && getUpcoming();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovies;