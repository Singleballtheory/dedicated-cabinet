import React from "react";
import Game from "./Game";
import PropTypes from "prop-types";

function GameList() {
  if (GameList.length > 0) {
    return (
      GameList()
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