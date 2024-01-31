import { createContext, useState } from "react";
import { baseUrl } from "../base";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(null);
  const [theme, setTheme] = useState("light"); // Added theme state

  async function fetchBlogPosts(newPage = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${newPage}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setPage(data.page);
      setPost(data.posts);
      setTotalpage(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data");
      setPage(1);
      setPost([]);
      setTotalpage(null);
    }
    setLoading(false);
  }

  function handlePageChange(newPage) {
    setPage(newPage);
    fetchBlogPosts(newPage);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    post,
    setPost,
    loading,
    setLoading,
    page,
    setPage,
    totalpage,
    setTotalpage, // Fix: Replace setLoading with setTotalpage
    handlePageChange,
    fetchBlogPosts,
    theme,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
