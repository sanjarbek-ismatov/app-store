import { createStore, applyMiddleware } from "redux";
import { ThunkMiddleware } from "redux-thunk";
export const reducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return action.payload;
  }
};
const store = createStore(reducer, applyMiddleware(ThunkMiddleware));
const Fetch = () => {
  return (dispatch) => {};
};
