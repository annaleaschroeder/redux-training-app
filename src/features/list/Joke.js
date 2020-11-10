import React from "react";
import styled from "styled-components/macro";

export default function Joke({ setup, punchline }) {
  return (
    <div>
      <SingleJoke>
        <p>{setup}</p>
        <p>{punchline}</p>
      </SingleJoke>
    </div>
  );
}

const SingleJoke = styled.li`
  list-style: square;
  margin-top: 10px;
  border: solid 3px black;
  padding: 5px;
`;
