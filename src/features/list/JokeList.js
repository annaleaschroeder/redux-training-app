import React from "react";
import { connect } from "react-redux";
import { buildRemoveFromLikes, buildAddToLikes } from "../../app/reducer";
import Joke from "./Joke";

export default function JokeList({ jokes, type }) {
  return (
    <div>
      <ul>
        {jokes.map(({ joke }, index) => (
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

export const ConnectedList = connect(mapStateToProps)(JokeList);

function mapLikesStateToProps(state) {
  return {
    likes: state.likes,
    type: "likes",
  };
}

export const ConnectedLikeList = connect(mapLikesStateToProps)(JokeList);
