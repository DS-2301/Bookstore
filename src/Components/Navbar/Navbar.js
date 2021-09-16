import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/books";
import "./Navbar.css";

Modal.setAppElement("#root");

export default function Navbar({ books }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.max(...books.map(({ id }) => id)) + 1,
      name: name,
      category: category,
      price: price,
      description: description,
    };
    dispatch(addItem(data));
    setPrice(1);
    setName("");
    setDescription("");
    setCategory("");
    closeModal();
  };

  return (
    <>
      <header className="headerNav">
        <span>Bookstore</span>
        <button className="addBookButton" onClick={openModal}>
          {" "}
          Add a Book{" "}
        </button>
      </header>
      <Modal
        className="BookModal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="bookModalTopRow">
          <h2>Add a Book</h2>
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
              min={1}
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
