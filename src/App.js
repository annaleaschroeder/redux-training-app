import React from "react";
import store from "./app/store";
import { ConnectedList, ConnectedLikeList } from "./features/list/JokeList";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ConnectedList />
        <ConnectedLikeList />
      </Provider>
    </div>
  );
}

export default App;
