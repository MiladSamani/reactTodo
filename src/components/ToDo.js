import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import BackDrop from "./BackDrop";

export default function ToDo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <div>
        <h2>{props.text}</h2>
      </div>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <BackDrop onClick={closeModalHandler} />}
    </div>
  );
}
