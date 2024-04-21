import { useDispatch} from "react-redux";
import { addPopularVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";

const usePopular = () => {
  const dispatch = useDispatch();
  
  const getPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      OPTIONS
    );
    
    const json = await data.json();
    const results = json.results;
    dispatch(addPopularVideo(results));
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopular;
