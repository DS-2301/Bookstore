import { useSelector } from "react-redux";
import Book from "../Book/Book";

export default function Books() {
  const books = useSelector((store) => store.books);
  return (
    <div>
      <Book />
    </div>
  );
}
