import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Calendar } from "components/Calendar";
import { Modal } from "components/Modal";

import rootReducer from "reducers";

const store = createStore(rootReducer);

export const App = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0, date: new Date() });
  const [showModal, setShowModal] = useState("");
  const [selectedEvent, setEvent] = useState(null);
  return (
    <Provider store={store}>
      {showModal && (
        <Modal
          close={() => setShowModal("")}
          positions={positions}
          created={showModal === "created"}
          selectedEvent={selectedEvent}
          setEvent={setEvent}
        />
      )}
      <Calendar
        setPositions={(arg) => {
          setPositions(arg);
        }}
        setOpenModal={setShowModal}
        setEvent={setEvent}
      />
    </Provider>
  );
};
