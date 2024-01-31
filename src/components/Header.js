import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <div
      className={`pt-2 ${
        theme === "dark"
          ? "bg-gray-800 text-white flex flex-row justify-around"
          : "bg-purple-400 text-white flex flex-row justify-around"
      } pb-2`}
    >
      <h1 className="p-2 text-2xl">Tech~Blogs</h1>

      <button
        onClick={toggleTheme}
        className={`ml-4 p-2  text-white rounded ${
          theme === "dark" ? "bg-gray-600" : "bg-purple-500"
        } focus:outline-none`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
