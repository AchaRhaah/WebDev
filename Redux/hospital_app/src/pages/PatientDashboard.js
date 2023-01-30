import React, { useState } from "react";
import Calendar from "react-calendar";

function PatientDashboard() {
  return (
    <div className="flex">
      <div className="h-screen w-[20%] bg-[#f7f7fd] border-r-[1px] mx-5"></div>
      <div className="h-screen w-[80%] bg-[#FFFFEFF] ">
        <div className="w-[100%] h-[5em] border-b-[1px] flex justify-end pr-4 items-center">
          <h5 className="font-medium text-xl mr-4">User's name</h5>
        </div>
        <div>
          <h2 className="text-3xl text-[#151736] mt-10 font-bold">
            BOOK AN APPOINTMENT
          </h2>
          <h3 className="text-xl text-[#5837df] mt-12 mb-10 font-medium">
            what part of your body do you want to consult?
          </h3>
          <div className="grid grid-cols-3 w-[60%] gap-10">
            <button className="w-[10em] h-[3em] uppercase rounded-[0.75em] bg-[#D4E4EF] text-[#151736] content-center hover:bg-[#c4d6e2] duration-[1000] ease-in">
              eye
            </button>
            <button className="w-[10em] h-[3em] uppercase rounded-[0.75em] bg-[#F6DDE9] text-[#151736] content-center hover:bg-[#e0c3d1] duration-[1000] ease-in">
              ear
            </button>
            <button className="w-[10em] h-[3em] uppercase rounded-[0.75em] bg-[#F9E0CA] text-[#151736] content-center hover:bg-[#d8bba2] duration-[1000] ease-in">
              nose
            </button>
            <button className="w-[10em] h-[3em] uppercase rounded-[0.75em] bg-[#FBF1CA] text-[#151736] content-center hover:bg-[#bdb183] duration-[1000] ease-in">
              throat
            </button>
            <button className="w-[10em] h-[3em] uppercase  rounded-[0.75em] bg-[#6646FD] text-[#151736] content-center hover:bg-[#8771f3] duration-[1000] ease-in">
              wound
            </button>
          </div>
          <div className="w-[75%] h-[30em] my-10 border-4 py-12 px-6 flex gap-10">
            <div className="w-[35%] h-[15em] border-4">
              <Calendar />
            </div>
            <div className="grid grid-cols-3 w-[10] h-[10em] gap-3">
              <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] text-white flex justify-center items-center">
                <p> 9:00 am</p>
              </div>
              <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] text-white flex justify-center items-center">
                <p> 11:00 am</p>
              </div>
              <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] text-white flex justify-center items-center">
                <p> 2:00 pm</p>
              </div>
              <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] text-white flex justify-center items-center">
                <p> 2:30 pm</p>
              </div>
              <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] text-white flex justify-center items-center">
                <p> 4:00 am</p>
              </div>
              <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] text-white flex justify-center items-center">
                <p> 5:00 pm</p>
              </div>
              <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] text-white flex justify-center items-center">
                <p> 6:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
