import React, { useRef } from "react";
import languages from "../utils/LanguageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  return (
    <div className=" pt-[55%] md:pt-[10%] flex justify-center ">
      <form
        className="p-2 rounded-lg w-full md:w-1/2 bg-black text-white grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" p-2 col-span-9 text-lg text-black "
          type="text"
          placeholder={languages[langKey].gptPlaceHolder}
        ></input>
        <button
          className="p-4 col-span-3 bg-red-500 text-xl font-semibold rounded-lg"
        >
          {languages[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
