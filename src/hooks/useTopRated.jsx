import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useTopRated = () => {
  const dispatch = useDispatch();

  const topRated = useSelector(store => store.movies.topRated)
  
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    const results = json.results;
    dispatch(addTopRated(results));
  };

  useEffect(() => {
   !topRated && getTopRated();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRated;