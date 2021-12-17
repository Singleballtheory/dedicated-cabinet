import React from "react";
import Game from "./Game";
import PropTypes from "prop-types";

const mainGameList = [
{
  name:  "NBA Jam Tournament Edition",
  manufacturer:  "Midway Games",
  releaseDate:  "1993/1994",
  monitor:  "Horizontal",
  players: "4 (Single player, Two-player co-op, One-vs-One, Two-vs-Two)",
  controls: "Joystick: 8-way Buttons: 3 (Shoot Pass Turbo)",
  cabinet: "Upright/Standard"
}
];

function GameList() {
  if (GameList.length > 0) {
    return (
      {mainGameList.map((game, index) =>
        <Game names={game.name}
        key={index}/>
        )}
      );
    } else {
    return (
      <div>
      <h1>No games yet!</h1>
      </div>
    );
  }
}



GameList.propTypes = {

}

export default GameList;