const initialState = {
  appointmemts: [
    {
      consultation: "",
      date: "",
      time: "",
    },
  ],
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_APPT":
      console.log("created project", action.apptInfo);
      return state;
    case "BOOK_APPT_ERRO ERRR":
      console.log("BOOK APT ERROR", action.err);
      return state;
    default:
      return state;
  }
};
