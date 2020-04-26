import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";
import DatePicker from "react-datepicker";

import { useOuterClick } from "hooks/useOuterClick";

import { addEvent, updateEvent, deleteEvent } from "actions/event.actions";

import "react-datepicker/dist/react-datepicker.css";
import "./main.scss";

export const Modal = ({
  positions: { x, y, date },
  created,
  setEvent,
  selectedEvent,
  close,
}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: (selectedEvent && selectedEvent.title) || "",
    start: (selectedEvent && selectedEvent.start) || date,
    color: (selectedEvent && selectedEvent.color) || "",
  });

  const modalRef = useOuterClick((e) => {
    close();
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(!created ? addEvent(state) : updateEvent(selectedEvent.id, state));
    setEvent(null);
    close();
  };

  const handleDiscard = () => {
    dispatch(deleteEvent(selectedEvent.id));
    setEvent(null);
    close();
  };

  return (
    <div
      ref={modalRef}
      className="modal"
      style={{ top: y + 15, left: x - 128 }}
    >
      <span className="top-bot"></span>
      <button onClick={close} className="modal-close"></button>
      <div className="modal-body">
        <div>
          <label className="modal-label" htmlFor="name">
            event name
          </label>
          <input
            id="name"
            type="text"
            className="modal-input"
            value={state.title}
            name="title"
            onChange={(e) =>
              e.target.value.length <= 30 &&
              setState({ ...state, title: e.target.value })
            }
          />
        </div>
        <div>
          <label className="modal-label" htmlFor="name">
            event date and time
          </label>
          <DatePicker
            className="modal-input time"
            selected={state.start}
            onChange={(date) => setState({ ...state, start: date })}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        </div>
        <CirclePicker
          className="modal-color-picker"
          width={"100%"}
          circleSize={18}
          circleSpacing={10}
          color={state.color}
          onChange={(color) =>
            handleInput({ target: { name: "color", value: color.hex } })
          }
        />

        <div className="buttons">
          <button className="red" onClick={created ? handleDiscard : close}>
            {created ? "Discard" : "Cancel"}
          </button>
          <button onClick={handleSubmit}>{created ? "Edit" : "Save"}</button>
        </div>
      </div>
    </div>
  );
};
