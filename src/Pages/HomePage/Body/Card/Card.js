import React from "react";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card card__div col-md-4 col-12 ">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
