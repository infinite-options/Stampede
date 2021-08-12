import React, { Component } from "react";
import bananaCard from "./bananaCard.png";
import shoeCard from "./shoeCard.png";

class Card extends Component {
  render() {
    return (
        <div>
      <div style={{width:"300px", height:"400px", backgroundColor:"black", color:"white"}}> Card 1 (Hardcoded)</div>
        <img src={bananaCard}></img>
        <img src={shoeCard}></img>
        </div>
    );
  }
}

export default Card;
