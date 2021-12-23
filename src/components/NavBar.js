import React from "react";
import PropTypes from "prop-types";
import "./../Nav.css";
import Cyberball from "./img/cyberball.JPG";
import ArchRivals from "./img/archrivals.JPG";
import Cheyenne from "./img/cheyenne.JPG";
import NBAJam from "./img/nbajam.JPG";
import PolePosition from "./img/poleposition.JPG";


function NavBar(props) {
  const navBarStyle = {
    height: "50px",
    width: "100%",
    textAlign: "center",
    padding: "10px",
    position: "sticky",
  }

  return (
    <React.Fragment>
    <div style={navBarStyle}>
    <button class="avatar" data-tooltip="Tournament Cyberball 2072" style={{backgroundImage: `url(${Cyberball})`}}></button>
    <button class="avatar" data-tooltip="Arch Rivals" style={{backgroundImage: `url(${ArchRivals})`}}></button>
    <button class="avatar" data-tooltip="Cheyenne" style={{backgroundImage: `url(${Cheyenne})`}}></button>
    <button class="avatar" data-tooltip="NBA Jam Tournament Edition" style={{backgroundImage: `url(${NBAJam})`}}></button>
    <button class="avatar" data-tooltip="Pole Position" style={{backgroundImage: `url(${PolePosition})`}}></button>
    </div>
    <div>
      {/* <button className="buttons" onClick={() => props.onAboutClick()}>About</button> */}
    </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  onAboutClick: PropTypes.func,
}

export default NavBar;