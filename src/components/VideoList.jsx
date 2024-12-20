import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/apiConstants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";

const VideoList = () => {
  const dispatch = useDispatch();
  const [videoResults, setVideoResults] = useState();
  const fetchYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideoResults(json.items);
  };

  useEffect(() => {
    fetchYoutubeVideos();
  }, []);

  return (
    videoResults && (
      <div className="flex flex-wrap px-4 py-2 shadow-sm">
        {videoResults.map((video) => (
          <Link
            key={video.id}
            to={"/watch?v=" + video.id}
            onClick={() => dispatch(toggleMenu())}
          >
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoList;
