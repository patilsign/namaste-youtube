import React from "react";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const keyId = searchParams.get("v");
  return (
    <div className="ml-5 mt-2 w-full flex">
      <div className="w-8/12 shadow-lg">
        <iframe
          className="w-full aspect-video rounded-lg"
          src={
            "https://www.youtube.com/embed/" + keyId + "?si=HCGFXJvEJ65HkvB_"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="item-center mt-3  bg-gray-100 py-10 font-thin text-center text-3xl rounded-md">
          Comment Sections
        </h1>
      </div>
      <div className="w-4/12 mx-5 h-auto bg-gray-100 shadow-lg rounded-md">
        <h1 className="items-center py-10 font-thin text-center text-3xl">
          Playlist Videos
        </h1>
      </div>
    </div>
  );
};

export default Watch;
