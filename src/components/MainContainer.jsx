import React from "react";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";

const MainContainer = () => {
  return (
    <div className="w-full ml-4 my-2  bg-gray-100 shadow-md">
      <ButtonList />
      <VideoList />
    </div>
  );
};

export default MainContainer;
