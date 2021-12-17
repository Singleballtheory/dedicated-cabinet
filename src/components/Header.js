import React from "react";
import DedCab from "./img/DedicatedCabinet.png";

function Header(){
  const headerStyle = {
    textAlign: "center",
  }
  return (
    <h1 style={headerStyle}><img src={DedCab}/></h1>
  );
}

export default Header;