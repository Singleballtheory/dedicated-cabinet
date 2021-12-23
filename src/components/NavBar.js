import React from "react";
import PropTypes from "prop-types";
import "./../Nav.css";
import GamePhoto from "./img/games.JPG";
import Cyberball from "./Cyberball";

function NavBar(props) {

  return (
    <React.Fragment>
    <div class="avatar" data-tooltip="test &#013; test" style={{backgroundImage: `url(${GamePhoto})`}}>
    </div>
    <div>
      <button className="buttons" onClick={() => props.onAboutClick()}>About</button>
    </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  onAboutClick: PropTypes.func,
}

export default NavBar;