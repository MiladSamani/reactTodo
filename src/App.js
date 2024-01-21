import React from "react";
import ToDo from "./components/ToDo";

export default function MyApp() {
  return (
    <div>
      <h1>MY TODO</h1>
      <ToDo text="English" />
      <ToDo text="Programming" />
      <ToDo text="Linux" />
     
    </div>
  );
}
