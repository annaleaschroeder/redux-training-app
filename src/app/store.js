import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

fetch("https://official-joke-api.appspot.com/jokes/ten")
  .then((res) => res.json())
  .then((data) => {
    store.dispatch({ type: "jokes/loadJokes", jokes: data });
  });

export default store;
