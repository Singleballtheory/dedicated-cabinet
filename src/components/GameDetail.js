import React from "react";
import PropTypes from "prop-types";

function GameDetail(props) {
  const { game } = props;

  return (
    <React.Fragment>
      <h1>{game.name}</h1>
      <p>{game.manufacturer}</p>
      <p>{game.releaseDate}</p>
      <p>{game.monitor}</p>
      <p>{game.players}</p>
      <p>{game.controls}</p>
      <p>{game.cabinet}</p>
      <hr />
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object,
};

export default GameDetail;