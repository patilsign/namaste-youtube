import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="w-60 h-auto pl-6 mt-2 font-light bg-gray-100 shadow-md rounded-md">
        <ul className="pt-5">
          <li>
            <Link to="/">HOME</Link>
          </li>
        </ul>
        <ul className="pt-5">
          <li>Playlist</li>
          <li>Your Videos</li>
          <li>Your Courses</li>
        </ul>
        <ul className="pt-5">
          <h1 className="py-2">You -</h1>
          <li>History</li>
          <li>Playlist</li>
          <li>Your Videos</li>
          <li>Your Courses</li>
        </ul>
        <ul className="pt-5">
          <h1 className="py-2">You -</h1>
          <li>History</li>
          <li>Playlist</li>
          <li>Your Videos</li>
          <li>Your Courses</li>
        </ul>
        <ul className="pt-5">
          <h1 className="py-2">You -</h1>
          <li>History</li>
          <li>Playlist</li>
          <li>Your Videos</li>
          <li>Your Courses</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
