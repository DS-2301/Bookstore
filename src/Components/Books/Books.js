import "./Books.css";
import { useSelector } from "react-redux";
import Book from "../Book/Book";

export default function Books() {
  const books = useSelector((store) => store.books);
  return (
    <div className="booksPane">
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
}
