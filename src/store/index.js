import { combineReducers, createStore } from "redux";

import books from "./books";

const appReducer = combineReducers({ books });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
    : (f) => f
);
