export const BookAppt = (apptInfo) => {
  return (dispatch, getState) => {
    // make async call to the db
    dispatch({ type: "BOOK_APPT", apptInfo });
  };
};
