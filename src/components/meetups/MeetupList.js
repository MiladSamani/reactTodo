import React from "react";
import MeetupItem from "./MeetupItem";
import "./MeetupList.css";

export default function MeetupList(props) {
  return (
    <ul className="list">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
