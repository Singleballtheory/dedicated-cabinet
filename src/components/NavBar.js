import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {

  return (
    <div>
      <button className="buttons" onClick={() => props.onAboutClick()}>About</button>
    </div>
  )
}

NavBar.propTypes = {
  onAboutClick: PropTypes.func,
}

export default NavBar;