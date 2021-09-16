import "./Books.css";
import Book from "../Book/Book";

export default function Books({ books }) {
  return (
    <div className="booksPane">
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </div>
  );
}
