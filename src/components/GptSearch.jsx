import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACK_IMG, SUPPORTED_LANG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BACK_IMG} alt="logo" />
      </div>
    

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
