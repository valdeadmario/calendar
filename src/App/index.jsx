import React, { Fragment } from "react";

import Calendar from "../Calendar";
import { Modal } from "../Modal";

export const App = () => {
  return (
    <Fragment>
      <Modal />
      <Calendar />
    </Fragment>
  );
};
