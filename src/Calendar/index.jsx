import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Modal } from "../Modal";

import "./main.scss";

export const Calendar = ({ setPositions }) => {
  const calendarComponentRef = useRef();
  const [calendarWeekends, setCalendarWeekends] = useState(true);
  const calendarEvents = useSelector((state) => state.events);
  console.log(calendarEvents);

  const handleDateClick = (arg) => {
    setPositions({ x: arg.jsEvent.clientX, y: arg.jsEvent.clientY });
  };

  return (
    <div className="page-wrap">
      <div className="container">
        <h1 className="page-title">Calendar</h1>
        <div className="calendar">
          <h2>Calendar View</h2>
          <div className="calendar-calendar">
            <FullCalendar
              eventLimit={4}
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
              ref={calendarComponentRef}
              weekends={calendarWeekends}
              events={calendarEvents}
              dateClick={handleDateClick}
              eventContent={(arg) => (
                <div>
                  <b>111</b>&nbsp;
                  <i>xi</i>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
