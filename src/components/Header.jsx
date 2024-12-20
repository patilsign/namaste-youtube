import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleNav = () => {
    dispatch(toggleMenu());
  };

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
      <div className="text-center py-2 px-4">
        <input
          type="text"
          className="w-96 my-2 px-4 py-2 bg-gray-100 rounded-l-full"
        />
        <button className="my-2 px-4 py-2 bg-gray-300 rounded-r-full font-bold">
          Search
        </button>
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
