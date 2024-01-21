import React from "react";
import "./MeetupItem.css";
import Card from "../ui/Card";

export default function MeetupItem(props) {
  return (
    <Card>
    <li className="item">
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className="actions">
        <button>To Favorites</button>
      </div>
    </li>
    </Card>
  );
}
