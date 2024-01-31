import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function Blogs() {
  const {
    post,
    loading,
    fetchBlogPosts,
    totalpage,
    page,
    handlePageChange,
    theme,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      await fetchBlogPosts(page);
    };

    fetchData();
  }, [fetchBlogPosts, page]);

  return (
    <div
      className={`py-4 flex flex-col flex-wrap justify-center ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      {loading && <p className="text-xl text-purple-600">Loading...</p>}
      {!loading && post.length === 0 && <p>No blog posts found.</p>}
      {post.map((blog) => (
        <div key={blog.id} className="py-4 justify-center self-center">
          <a
            href="https://resume-srpp.onrender.com/"
            className={`text-left block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ${
              theme === "dark"
                ? "dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                : ""
            }`}
          >
            <h5
              className={`mb-2 text-2xl font-bold tracking-tight ${
                theme === "dark" ? "dark:text-white" : "text-gray-900"
              }`}
            >
              {blog.title}
            </h5>
            <p
              className={`font-normal ${
                theme === "dark" ? "dark:text-gray-200" : "text-gray-400"
              } text-left`}
            >
              {blog.date}
            </p>
            <p
              className={`font-normal ${
                theme === "dark" ? "dark:text-gray-200" : "text-gray-700"
              }`}
            >
              {blog.content}
            </p>
            <div className="mt-2 gap-2 flex flex-row flex-wrap">
              {blog.tags.slice(0, 5).map((tag, index) => (
                <div
                  key={index}
                  className={` inline-block px-2 py-1 rounded  ${
                    theme === "dark"
                      ? "bg-gray-200 text-black "
                      : " bg-gray-200 text-black  bg-purple-200 text-purple-800 dark:text-white"
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>
          </a>
        </div>
      ))}
      {totalpage && (
        <div className="flex flex-row gap-4 justify-center">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={` inline-block px-2 py-1 rounded  ${
              theme === "dark"
                ? "bg-gray-600 text-white "
                : " bg-gray-200 text-black  bg-purple-600 text-white dark:text-white"
            }`}
          >
            Previous Page
          </button>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalpage}
            className={` inline-block px-2 py-1 rounded  ${
              theme === "dark"
                ? "bg-gray-600 text-white "
                : " bg-gray-200 text-black  bg-purple-600 text-white dark:text-white"
            }`}
          >
            Next Page
          </button>
          <p
            className={`p-3 ${
              theme === "dark" ? "text-gray-400" : "text-purple-400"
            }`}
          >
            Page {page} of {totalpage}
          </p>
        </div>
      )}
    </div>
  );
}
