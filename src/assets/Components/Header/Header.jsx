import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="px-20 w-full p-4 flex flex-col gap-5 justify-between items-center sm:flex-row">
      <div>
        <a href="/" className="font-extrabold text-transparent bg-clip-text text-xl bg-gradient-to-r from-purple-400 to-pink-600">CodingHub</a>
      </div>
      <div className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex flex-col gap-3 justify-center items-center whitespace-nowrap sm:flex-row">
        <Link to="/">Home</Link>
        <Link to="/applied">Applied Jobs</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blogs">Blog</Link>
      </div>
      <div>
        <button className="bg-gradient-to-r from-purple-400 to-pink-600 btn btn-sm btn-active btn-secondary border-none text-xs">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
