import React from "react";
import PropTypes from "prop-types";

function Game(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
    </React.Fragment>
  );
}

Game.propTypes = {
  name: PropTypes.string,
  manufacturer: PropTypes.string,
  releaseDate: PropTypes.string,
  monitor: PropTypes.string,
  players: PropTypes.string,
  controls: PropTypes.string,
  cabinet: PropTypes.string

};

export default Game;