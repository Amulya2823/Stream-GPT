import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies.trailerVideo)

  const getTrailerVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    const filteredTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    
    const trailer = filteredTrailer[0];
    
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
   !trailerVideo && getTrailerVideos();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTrailerVideo;
