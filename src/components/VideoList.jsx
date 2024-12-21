import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/apiConstants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { feedVideoList } from "../utils/store/videoSlice";

const VideoList = () => {
  const feeds = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  //const [videoResults, setVideoResults] = useState();
  const fetchYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(feedVideoList(json.items));
    //setVideoResults(json.items);
    //console.log(json.items);
  };

  useEffect(() => {
    fetchYoutubeVideos();
  }, []);

  if (!feeds) return;

  return (
    feeds && (
      <div className="flex flex-wrap px-4 py-2 shadow-sm">
        {feeds.map((video) => {
          const keyId = typeof video.id === 'object' ? video.id.videoId : video.id
          return (
            <Link
              key={keyId}
              to={"/watch?v=" + keyId}
              onClick={() => dispatch(toggleMenu())}
            >
              <VideoCard key={video.id} info={video} />
            </Link>
          );
        })}
      </div>
    )
  );
};

export default VideoList;
