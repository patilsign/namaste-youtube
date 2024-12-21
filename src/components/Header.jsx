import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import {
  SEARCH_BY_KEYWORD_API,
  YOUTUBE_SEARCH_API,
} from "../utils/apiConstants";
import { cacheResults } from "../utils/store/searchSlice";
import { feedVideoList } from "../utils/store/videoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showSuggesstionsBox, setShowSuggesstionsBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const [suggesstions, setSuggesstions] = useState([]);
  const searchCashe = useSelector((store) => store.search);

  const fetchSuggesstions = async () => {
    if (!searchQuery) return;
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggesstions(json[1]);
    searchQuery &&
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
  };
  const handleToggleNav = () => {
    dispatch(toggleMenu());
  };

  const fetchVideos = async () => {
    const data = await fetch(SEARCH_BY_KEYWORD_API + searchQuery);
    const json = await data.json();
    dispatch(feedVideoList(json.items));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCashe[searchQuery]) {
        setSuggesstions(searchCashe[searchQuery]);
      } else {
        fetchSuggesstions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="flex flex-row justify-between shadow-xl">
      <div className="flex py-4 px-5">
        <img
          className="h-10"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png"
          onClick={handleToggleNav}
        />
        <img
          className="h-10 ml-4"
          alt="logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="flex flex-col py-2 px-4 relative ">
        <div>
          <input
            type="text"
            className="w-96 my-2 px-4 py-2 bg-gray-100 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggesstionsBox(true)}
            onBlur={() => setShowSuggesstionsBox(false)}
          />
          <button
            className="my-2 px-4 py-2 bg-gray-300 rounded-r-full font-bold"
            onClick={fetchVideos}
          >
            Search
          </button>
        </div>
        <div className="absolute bottom-0 left-0">
          {showSuggesstionsBox && searchQuery && (
            <ul className="mx-3 py-3 px-5 fixed bg-gray-100 rounded-md shadow-md w-96">
              {suggesstions.map((query) => (
                <li key={query} className="p-2 mx-2  hover:bg-gray-200">
                  {query}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="py-2 px-4">
        <img
          className="h-10 my-2 px-4 py-2"
          alt="profile"
          src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette.png"
        />
      </div>
    </div>
  );
};

export default Header;
