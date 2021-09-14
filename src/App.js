import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBooks } from "./store/books";
import { books } from "./books";
import Navbar from "./Components/Navbar/Navbar";
import Books from "./Components/Books/Books";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks(books));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Books />
      </div>
    </div>
  );
}

export default App;
