import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEvent } from "./actions";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./main.scss";

export const Calendar = ({ setPositions, setOpenModal, setEvent }) => {
  const dispatch = useDispatch();
  const calendarComponentRef = useRef();
  const [calendarWeekends, setCalendarWeekends] = useState(true);
  const calendarEvents = useSelector((state) => state.events);
  console.log(calendarEvents);
  const moveEvent = ({ event }) => {
    dispatch(updateEvent(event.id, { start: event.start }));
  };

  const handleDateClick = (arg) => {
    setOpenModal("");
    setPositions({
      x: arg.jsEvent.clientX,
      y: arg.jsEvent.clientY,
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
    <div className="page-wrap">
      <div className="container">
        <h1 className="page-title">Calendar</h1>
        <div className="calendar">
          <h2>Calendar View</h2>
          <div className="calendar-calendar">
            <FullCalendar
              eventLimit={3}
              customButtons={{
                agenda: {
                  theme: "true",
                  text: "Agenda",
                  click: function () {
                    alert("clicked the custom button!");
                  },
                },
              }}
              buttonText={{
                today: "Today",
                month: "Month",
                week: "Week",
                day: "Day",
                next: "Next",
                prev: "Back",
              }}
              defaultView="dayGridMonth"
              header={{
                left: "today,prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,agenda",
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              editable={true}
              droppable={true}
              eventDrop={moveEvent}
              onDragStart={console.log}
              ref={calendarComponentRef}
              weekends={calendarWeekends}
              displayEventTime={false}
              events={calendarEvents}
              dateClick={handleDateClick}
              eventClick={handleEventClick}
              nowIndicator={true}
              slotDuration={"01:00:00"}
              slotLabelFormat={{
                hour: "numeric",
                minute: "2-digit",
                meridiem: "long",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
