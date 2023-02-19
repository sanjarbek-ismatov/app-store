import { createStore, applyMiddleware } from "redux";

import axios from "axios";

import { Request, Failure, Success } from "./actions";
import thunk from "redux-thunk";
const initialState: { loading: boolean; data: []; error: {} } = {
  loading: true,
  data: [],
  error: {},
};
const reducer = (
  state: any = initialState,
  action: { type: string; payload: string } | any
) => {
  switch (action.type) {
    case "request":
      return {
        loading: true,
        data: [],
        error: {},
      };
    case "success":
      return {
        loading: false,
        data: action.payload,
        error: {},
      };
    case "failure":
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
export const Fetch = (query: string) => {
  return (dispatch: any) => {
    dispatch(Request());
    fetch(`https://app-store-uz.onrender.com?app=${query}`)
      .then((res) => res.json())
      .then((data: any) => {
        dispatch(Success(data));
      })

      .catch((error) => dispatch(Failure(error)));
  };
};
