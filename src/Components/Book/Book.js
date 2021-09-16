import "./Book.css";
import bookIcon from "../../bookIcon.svg";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../../store/books";
import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");

export default function Book({ book }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(book.price);
  const [name, setName] = useState(book.name);
  const [description, setDescription] = useState(book.description);
  const [category, setCategory] = useState(book.category);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: book.id,
      name: name,
      category: category,
      price: price,
      description: description,
    };
    dispatch(editItem(data));
    closeModal();
  };

  return (
    <>
      <div className="bookCard" onClick={openModal}>
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
      <Modal
        className="BookModal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="bookModalTopRow">
          <h2>Edit Book</h2>
          <button className="deleteBook" onClick={closeModal}>
            X
          </button>
        </div>
        <form className="BookForm" onSubmit={handleSubmit}>
          <span className="BookFormRow">
            <label className="BookFormLabel" htmlFor="name">
              Name:
            </label>
            <input
              required
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </span>

          <span className="BookFormRow">
            <label className="BookFormLabel" htmlFor="price">
              Price:
            </label>
            <input
              required
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </span>

          <span className="BookFormRow">
            <label className="BookFormLabel" htmlFor="category">
              Category:
            </label>
            <input
              required
              id="category"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </span>
          <span className="BookFormRow">
            <label className="BookFormLabel" htmlFor="description">
              Description:
            </label>
            <textarea
              required
              className="BookDescription"
              id="description"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </span>
          <button className="BookSubmit" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
}
