export const ADD_EVENT = "ADD_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

export const addEvent = (payload) => ({
  type: ADD_EVENT,
  payload,
});

export const updateEvent = (id, body) => ({
  type: UPDATE_EVENT,
  payload: { body, id },
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  payload: id,
});
