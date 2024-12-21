import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import { commentsData } from "../utils/apiConstants";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const keyId = searchParams.get("v");
  return (
    <>
      <div className="ml-5 mt-2 w-full">
        <div className="w-full shadow-lg flex flex-col">
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
        </div>
        <div className="w-full aspect-video rounded-lg my-2 py-2">
          <h1 className="font-bold text-xl px-2 py-2">Comment</h1>
          {commentsData.map((comment, index) => (
            <CommentsList key={index} info={comment} />
          ))}
        </div>
      </div>
      <div className="w-4/12 mx-5 h-auto bg-gray-100 shadow-lg rounded-md">
        <h1 className="items-center py-10 font-thin text-center text-3xl">
          Playlist Videos
        </h1>
      </div>
    </>
  );
};

export default Watch;
