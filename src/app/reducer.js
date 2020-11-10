export default function jokeReducer(
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
