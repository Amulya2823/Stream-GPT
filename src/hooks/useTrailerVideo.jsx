import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

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
    getTrailerVideos();
  }, []);
};

export default useTrailerVideo;
