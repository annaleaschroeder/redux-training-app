import { createStore } from "redux";
import combineReducers from "./reducer";

const store = createStore(combineReducers);

fetch("https://official-joke-api.appspot.com/jokes/ten")
  .then((res) => res.json())
  .then((data) => {
    store.dispatch({ type: "jokes/loadJokes", jokes: data });
  });

export default store;
