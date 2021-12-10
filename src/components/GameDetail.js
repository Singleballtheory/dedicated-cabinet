import React from "react";
import PropTypes from "prop-types";

function GameDetail(props) {
  const { game } = props;

  return (
    <React.Fragment>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <p>{game.released}</p>
      <p>{game.cabinetType}</p>
      <p>{game.controls}</p>
      <hr />
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  drink: PropTypes.object,
};

export default GameDetail;