import React from "react";
import PropTypes from "prop-types";
import DedCab from "./img/DedicatedCabinet.png";

function NavBar(props) {
  const avatar = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    content: attr(dataTooltip),

  }

  return (
    <React.Fragment>
    <div style={avatar}>Anything here?<img src={DedCab}/>
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