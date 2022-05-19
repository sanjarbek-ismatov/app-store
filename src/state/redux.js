const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");

const { Request, Success, Failure } = require("./actions");
const thunkMiddleware = require("redux-thunk").default;
const initialState = {
  loading: true,
  data: [],
  error: {},
};
const reducer = (state = initialState, action) => {
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
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const Fetch = () => {
  return (dispatch) => {
    dispatch(Request());
    axios
      .get(`https://ws75.aptoide.com/api/7/apps/search/query=aptoide/limit=30`)
      .then((data) => {
        console.log(data);
        dispatch(Success(data));
      })
      .catch((error) => dispatch(Failure(error)));
  };
};
store.dispatch(Fetch());
store.subscribe(() => console.log(store.getState()));
