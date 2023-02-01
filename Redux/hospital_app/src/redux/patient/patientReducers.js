const initialState = {
  consultation: "",
  date: "",
  time: "",
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_APPT":
      console.log("created project", action.apptInfo);
      break;
    default:
      return state;
  }
  return state;
};
