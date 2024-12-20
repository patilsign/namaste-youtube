import React from "react";

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg bg-gray-300">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-bold">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
