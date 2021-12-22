import React from "react";
import PropTypes from "prop-types";
import "./../Nav.css";

function NavBar(props) {

  return (
    <React.Fragment>
    <div class="avatar" data-tooltip="Thinking Cat">Anything here?
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