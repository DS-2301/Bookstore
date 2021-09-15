import "./Book.css";
import bookIcon from "../../bookIcon.svg";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/books";

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="bookCard">
      <div className="topBookRow">
        <img className="bookImage" src={bookIcon} alt={book.name} />
        <button
          className="deleteBook"
          onClick={() => {
            dispatch(removeItem(book.id));
          }}
        >
          X
        </button>
      </div>
      <span className="bookName">{book.name}</span>
      <span className="bookCategory">{book.category}</span>
      <span className="bookPrice">{book.price}$</span>
    </div>
  );
}
