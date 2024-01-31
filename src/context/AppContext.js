import { createContext, useState } from "react";
import { baseUrl } from "../base";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(null);
  const [theme, setTheme] = useState("light"); // Added theme state

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
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
    setLoading,
    handlePageChange,
    fetchBlogPosts,
    theme,
    toggleTheme,
  };

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
