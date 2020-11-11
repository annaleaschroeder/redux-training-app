import React from "react";
import { connect } from "react-redux";
import { buildRemoveFromLikes, buildAddToLikes } from "../../app/reducer";
import Joke from "./Joke";

export default function JokeList({ jokes, type }) {
  return (
    <div>
      <ul>
        {jokes.map((joke, index) => (
          <Joke
            key={index}
            joke={joke}
            onClick={
              type === "likes"
                ? buildRemoveFromLikes(joke)
                : buildAddToLikes(joke)
            }
          />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    jokes: state.jokes,
    type: "default",
  };
}
//default: muss einen Wert gesetzt haben, unspezifisch. Dient nur der Unterscheidung, darf nicht undefined sein
// erzeugt objekt, keys werden als properties mit übergeben

export const ConnectedList = connect(mapStateToProps)(JokeList);

function mapLikesStateToProps(state) {
  return {
    jokes: state.likes,
    type: "likes",
  };
}

export const ConnectedLikeList = connect(mapLikesStateToProps)(JokeList);
