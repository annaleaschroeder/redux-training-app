import { combineReducers } from "redux";
import store from "./store";

function jokes(
  state = {
    jokes: [{ setup: "initial setup", punchline: "no punchline yet" }],
  },
  action
) {
  switch (action.type) {
    case "jokes/loadJokes":
      return { ...state, jokes: action.jokes };
    default:
      return state;
  }
}

function likes(state = [], action) {
  switch (action.type) {
    case "likes/add":
      if (state.findIndex((joke) => joke === action.joke) >= 0) {
        return state;
      }

      return [...state, action.joke];

    case "likes/remove":
      return state.filter((joke) => joke !== action.joke);
    default:
      return state;
  }
}

export function buildAddToLikes(joke) {
  return function () {
    store.dispatch({ type: "likes/add", joke: joke });
  };
}

export function buildRemoveFromLikes(joke) {
  return function () {
    store.dispatch({ type: "likes/remove", joke: joke });
  };
}

export default combineReducers({ jokes: jokes, likes: likes });
