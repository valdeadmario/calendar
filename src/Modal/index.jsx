import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addEvent, updateEvent } from "../Calendar/actions";

import "./main.scss";

export const Modal = ({ positions: { x, y }, created, id, close }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(!created ? addEvent(state) : updateEvent(id, state));
    close();
  };

  return (
    <div className="modal" style={{ top: y, left: x }}>
      <input
        type="text"
        value={state.title}
        name="title"
        onChange={handleInput}
      />
      <input
        type="date"
        value={state.date}
        name="date"
        onChange={handleInput}
      />
      <input
        type="date"
        value={state.time}
        name="time"
        onChange={handleInput}
      />
      <input
        type="text"
        value={state.notes}
        name="notes"
        onChange={handleInput}
      />
      <div className="buttons">
        <button className="red" onClick={close}>
          {created ? "Discard" : "Cancel"}
        </button>
        <button onClick={handleSubmit}>{created ? "Edit" : "Save"}</button>
      </div>
    </div>
  );
};
