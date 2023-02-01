import React from "react";

function ApptCard({ appointment }) {
  {
    console.log("rendered");
  }
  return (
    <div className="w-[14em] h-[16em] rounded-[2em] p-6   shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-[3.5em] h-[3.5em] rounded-full flex justify-center items-center  bg-[#EDF1FF]">
          <h4 className="text-[#6b70dd]">JD</h4>
        </div>
        <h3 className="text-[#6b70dd]">
          {appointment.patientFirstName} {appointment.patientLastName}
        </h3>
      </div>
      <div className="flex gap-2 mt-2">
        <label className="text-[#B8B6BB]" htmlFor="">
          Consultation:
        </label>
        <p>{appointment.consultation}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <label className="text-[#B8B6BB]" htmlFor="">
          date:
        </label>
        <p>{appointment.date}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <label className="text-[#B8B6BB]" htmlFor="">
          Time:
        </label>
        <p>{appointment.time}</p>
      </div>
      <div className="flex justify-center mt-3">
        <button className="w-[2em] h-[2em] rounded-full bg-[#c6cce0] hover:bg-[#dbdeeb] duration-75 ease-in-out text-[#676646F] self-auto">
          +
        </button>
      </div>
    </div>
  );
}

export default ApptCard;
