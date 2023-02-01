import React from "react";
import { connect, useSelector } from "react-redux";
import ApptCard from "../components/ApptCard";
import "react-calendar/dist/Calendar.css";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

function DoctorDashboard({ appts }) {
  // console.log(appts)
  return (
    <div className="flex">
      <div className="h-screen w-[20%] bg-[#f7f7fd] border-r-[1px]"></div>
      <div className="h-screen w-[80%] bg-[#FFFFEFF] ">
        <div className="w-[100%] h-[5em] border-b-[1px] flex justify-end pr-4 items-center">
          <h5 className="font-medium text-xl mr-4">Doctor's name</h5>
        </div>
        <div className="ml-[3em]">
          <h2 className="text-3xl text-[#151736] mt-10 font-bold">
            VIEW APPOINTMENTS
          </h2>
          <div className="grid grid-cols-3 gap-[10em]">
            {appts &&
              appts.map((appt) => {
                return <ApptCard appointment={appt} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    appts: state.firestore.ordered.Appointments,
  };
};
// export default connect(mapStateToProps)(DoctorDashboard)
export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([{ collection: "Appointments" }])
)(DoctorDashboard);
