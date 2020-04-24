import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./main.scss";

export default class Calendar extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    calendarWeekends: true,
    calendarEvents: [
      { title: "Event Now", start: new Date() },
    ],
  };

  render() {
    return (
      <div className="page-wrap">
        <div className="container">
          <h1 className="page-title">Calendar</h1>
          <div className="calendar">
            <h2>Calendar View</h2>
            <div className="calendar-calendar">
              <FullCalendar
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
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                dateClick={this.handleDateClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleDateClick = (arg) => {
    if (
      window.confirm("Would you like to add an event to " + arg.dateStr + " ?")
    ) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay,
        }),
      });
    }
  };
}
