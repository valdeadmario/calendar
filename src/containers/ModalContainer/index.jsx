import React from "react";
import { useDispatch } from "react-redux";

import { addEvent, updateEvent, deleteEvent } from "actions/event.actions";

import { Modal } from "components/Modal";

export const ModalContainer = ({
  positions,
  created,
  selectedEvent,
  close,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = (state) => {
    dispatch(!created ? addEvent(state) : updateEvent(selectedEvent.id, state));
    close();
  };

  const handleDiscard = () => {
    dispatch(deleteEvent(selectedEvent.id));
    close();
  };

  return (
    <Modal
      created={created}
      positions={positions}
      selectedEvent={selectedEvent}
      close={close}
      handleDiscard={handleDiscard}
      handleSubmit={handleSubmit}
    />
  );
};
