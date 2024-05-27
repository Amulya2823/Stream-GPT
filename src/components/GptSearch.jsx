import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACK_IMG, SUPPORTED_LANG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BACK_IMG} alt="logo" />
      </div>
      <GptSearchBar/>
    </div>
  );
};

export default GptSearch;
