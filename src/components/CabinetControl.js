import React from "react";
import GameDetail from "./GameDetail";

const gameList = [
  {
    name: "test",
    description: "test",
    released: "test",
    cabType: "test",
    controls: "test"
  }
];

class GameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameList: gameList,
    };
  }

  render() {
    
  }
}