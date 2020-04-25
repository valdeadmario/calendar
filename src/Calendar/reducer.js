import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./actions";

let ID = 100;

const initialState = [
  {
    id: 0,
    title: "Lets begin",
    start: new Date(),
    notes: "",
    eventColor: "#378006",
  },
  { id: 1, title: "Lets begin", start: new Date(), notes: "" },
  { id: 2, title: "Lets begin", start: new Date(), notes: "" },
  { id: 3, title: "Lets begin", start: new Date(), notes: "" },
  { id: 4, title: "Lets begin", start: new Date(), notes: "" },
  { id: 5, title: "Lets begin", start: new Date(), notes: "" },
  {
    id: 6,
    title: "Lets begin",
    start: new Date(),
    notes: "",
    eventColor: "#378006",
  },
];

const events = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [
        ...state,
        {
          id: ID++,
          ...action.payload,
        },
      ];

    case UPDATE_EVENT:
      return state.map((event) =>
        event.id === action.payload.id
          ? { ...event, ...action.payload.body }
          : event
      );

    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.payload);

    default:
      return state;
  }
};

export default events;
