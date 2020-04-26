import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./actions";

let ID = 100;

const initialState = [
  {
    id: 0,
    title: "Lets begin",
    start: new Date(),
    notes: "",
    color: "#9c27b0",
  },
  { id: 1, title: "Lets begin", start: new Date(), notes: "" },
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
