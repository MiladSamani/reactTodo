import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-refresher-27ac5-default-rtdb.firebaseio.com/meetups.json "
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        console.log(data);
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Ensure loading state is updated on error
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
