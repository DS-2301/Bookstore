import {
  addBooksToStore,
  addItemToStore,
  editItemInStore,
  removeItemFromStore,
} from "./reducerFunctions";

const GET_BOOKS = "GET_BOOKS";
const ADD_ITEM = "ADD_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

export const getBooks = (books) => {
  return {
    type: GET_BOOKS,
    books,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    itemId,
  };
};

export const editItem = (item) => {
  return {
    type: EDIT_ITEM,
    item,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return addBooksToStore(action.books);
    case ADD_ITEM:
      return addItemToStore(state, action.item);
    case REMOVE_ITEM:
      return removeItemFromStore(state, action.itemId);
    case EDIT_ITEM:
      return editItemInStore(state, action.item);
    default:
      return state;
  }
};

export default reducer;
