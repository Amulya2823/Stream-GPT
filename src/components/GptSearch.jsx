import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACK_IMG, SUPPORTED_LANG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img className="h-screen object-cover md:h-auto" src={BACK_IMG} alt="logo" />
      </div>
      <div className="">
      <GptSearchBar/>
      </div>
      
    </div>
  );
};

export default GptSearch;
