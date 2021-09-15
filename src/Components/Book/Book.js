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
        className="editBookModal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="bookModalTopRow">
          <h2>Edit Book</h2>
          <button className="deleteBook" onClick={closeModal}>
            X
          </button>
        </div>
        <form className="editBookForm" onSubmit={handleSubmit}>
          <span className="editBookFormRow">
            <label className="editBookFormLabel" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </span>

          <span className="editBookFormRow">
            <label className="editBookFormLabel" htmlFor="price">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </span>

          <span className="editBookFormRow">
            <label className="editBookFormLabel" htmlFor="category">
              Category:
            </label>
            <input
              id="category"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </span>
          <span className="editBookFormRow">
            <label className="editBookFormLabel" htmlFor="description">
              Description:
            </label>
            <textarea
              className="editBookDescription"
              id="description"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </span>
          <button className="editBookSubmit" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
}
