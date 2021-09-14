export const addBooksToStore = (books) => {
  return books;
};

export const addItemToStore = (state, item) => {
  return [...state, item];
};

export const removeItemFromStore = (state, id) => {
  return state.filter((item) => item.id !== id);
};

export const editItemInStore = (state, item) => {
  const items = [...state];
  return items.map((stateItem) => {
    if (stateItem.id !== item.id) {
      return stateItem;
    } else {
      return item;
    }
  });
};
