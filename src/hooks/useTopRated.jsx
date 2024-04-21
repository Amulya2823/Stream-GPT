import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const useTopRated = () => {
  const dispatch = useDispatch();
  
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
    getTopRated();
  }, []);
};

export default useTopRated;