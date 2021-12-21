import React from "react";
import Game from "./Game";
import PropTypes from "prop-types";

function GameList(props) {

  return (
    <React.Fragment>
    {props.gameList.map((game) =>
    <Game
      name={game.name}
    />
    )}
    </React.Fragment>
  );
}

GameList.propTypes = {
  gameList: PropTypes.array,
};

export default GameList;