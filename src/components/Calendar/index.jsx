import React, { useRef } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./main.scss";

export const Calendar = ({
  handleDateClick,
  handleEventClick,
  handleDrop,
  calendarEvents,
}) => {
  const calendarComponentRef = useRef();

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
                    alert("clicked the agenda!");
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
              eventDrop={handleDrop}
              ref={calendarComponentRef}
              weekends={true}
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
