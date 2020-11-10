import React from "react";
import { connect } from "react-redux";
import Joke from "./Joke";

export default function JokeList({ jokes }) {
  return (
    <div>
      <ul>
        {jokes.map(({ setup, punchline }, index) => (
          <Joke key={index} setup={setup} punchline={punchline} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    jokes: state.jokes,
  };
}

export const ConnectedList = connect(mapStateToProps)(JokeList);
