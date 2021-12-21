import React from "react";
import Game from "./Game";
import PropTypes from "prop-types";

function GameList(props) {

  return (
    <React.Fragment>
    <hr />
    {props.gameList.map((game) =>
    <Game
      name={game.name}
      manufacturer={game.manufacturer}
      releaseDate={game.releaseDate}
      monitor={game.monitor}
      players={game.players}
      controls={game.controls}
      cabinet={game.cabinet}
      />
      )}
    </React.Fragment>
  );
}

GameList.propTypes = {
  gameList: PropTypes.array,
};

export default GameList;