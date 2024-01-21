import { useRef } from "react";
import React from "react";
import Card from "../ui/Card";
import "./NewMeetupForm.css";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor="image">meetup image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className="control">
          <label htmlFor="address">meetup address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className="control">
          <label htmlFor="description">meetup description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="actions">
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
}
