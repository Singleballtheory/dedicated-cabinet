import React from "react";
import Game from "./Game";
import GameList from "./GameList";

function Cyberball() {

  return (
    <React.Fragment>
      <Game
  name="Tournament Cyberball 2072"
  manufacturer="Atari Games"
  releaseDate="1989"
  monitor="Horizontal"
  players="4 (Single player, Two-player co-op, One-vs-One, Two-vs-Two)"
  controls="Joystick: 8-way Buttons: 1 (Pass/Lateral/Turbo Boost)"
  cabinet="Upright/Standard, dual monitor"
    />
  </React.Fragment>
  );
}

export default Cyberball;