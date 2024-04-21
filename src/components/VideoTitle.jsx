import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[18%] px-20 absolute text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-xl font-semibold w-1/3">{overview}</p>
      <div>
        <button className="bg-white m-2 px-10 p-4 rounded-lg text-black font-bold text-xl hover:opacity-80 ">
          ▷ Play
        </button>
        <button className="bg-gray-500 px-7 p-4 rounded-lg text-white font-semibold text-xl bg-opacity-60">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
