import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom"



export default function NewMeetupsPage() {
    const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-refresher-27ac5-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
