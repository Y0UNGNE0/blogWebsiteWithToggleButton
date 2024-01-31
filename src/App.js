// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <div className="justify-center bg-purple-100 fontFamilyAll">
        <Header />
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
