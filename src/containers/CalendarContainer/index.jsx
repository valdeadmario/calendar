import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateEvent } from "actions/event.actions";

import { Calendar } from "components/Calendar";

export const CalendarContainer = ({ setPositions, setOpenModal, setEvent }) => {
  const dispatch = useDispatch();
  const calendarEvents = useSelector((state) => state.events);

  const moveEvent = ({ event }) => {
    dispatch(updateEvent(event.id, { start: event.start }));
  };

  const handleDateClick = (arg) => {
    setOpenModal("");
    setPositions({
      x: arg.jsEvent.pageX,
      y: arg.jsEvent.pageY,
      date: arg.date,
    });
    setOpenModal("save");
  };

  const handleEventClick = (arg) => {
    const currentEvent = calendarEvents.find(
      (item) => item.id === +arg.event.id
    );
    setPositions({ x: arg.jsEvent.clientX, y: arg.jsEvent.clientY });
    setEvent(currentEvent);
    setOpenModal("created");
  };

  return (
    <Calendar
      handleDateClick={handleDateClick}
      handleEventClick={handleEventClick}
      handleDrop={moveEvent}
      calendarEvents={calendarEvents}
    />
  );
};
