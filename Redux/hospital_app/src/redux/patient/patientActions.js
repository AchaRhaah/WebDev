export const BookAppt = (apptInfo) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to the db
    const firestore = getFirestore();
    firestore.collection("Appointments").add({
      ...apptInfo,
      patientFirstName: 'John',
      patientLastName: 'Doe',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "BOOK_APPT", apptInfo });
    }).catch((error) => {
      dispatch({type: 'BOOK_APPT_ERRO ERRR'})
    })
  };
};
