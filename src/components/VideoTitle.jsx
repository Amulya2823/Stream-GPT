import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-10">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-3 text-lg font-normal w-1/3">{overview}</p>
      <div>
        <button className="bg-gray-500 m-2 px-12 p-4 rounded-lg text-white font-semibold text-xl bg-opacity-60">
          ▷ Play
        </button>
        <button className="bg-gray-500 px-12 p-4 rounded-lg text-white font-semibold text-xl bg-opacity-60">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
