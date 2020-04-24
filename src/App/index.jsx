import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Calendar } from "../Calendar";
import { Modal } from "../Modal";

import rootReducer from "../reducers";

const store = createStore(rootReducer);

export const App = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  return (
    <Provider store={store}>
      {showModal && (
        <Modal close={() => setShowModal(false)} positions={positions} />
      )}
      <Calendar
        setPositions={(arg) => {
          setPositions(arg);
          setShowModal(true);
        }}
      />
    </Provider>
  );
};
