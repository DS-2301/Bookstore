import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "./store/books";
import { books } from "./books";
import Navbar from "./Components/Navbar/Navbar";
import Books from "./Components/Books/Books";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks(books));
  }, [dispatch]);

  const booksFromStore = useSelector((store) => store.books);

  return (
    <div className="App">
      <Navbar books={booksFromStore} />
      <div className="container">
        <Books books={booksFromStore} />
      </div>
    </div>
  );
}

export default App;
