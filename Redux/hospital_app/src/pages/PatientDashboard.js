import React, { useState } from "react";
import Calendar from "react-calendar";
import Consultation from "../components/Consultation";
import Time from "../components/Time";
import "react-calendar/dist/Calendar.css";

function PatientDashboard() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date)
    let newDate = date.toString().slice(0,15)
    setApptInfo((prevState) => ({
      ...prevState,
      date: newDate
    }));
  };
  const [apptInfo, setApptInfo] = useState({
    consultation: "",
    date: "",
    time: "",
  });
  const Onclick = (e) => {
    setApptInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.textContent,
    }));
  };
  const OnSubmit = (e) => {
    e.preventDefault()
    console.log(apptInfo);
  };


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
          <form action="" onSubmit={OnSubmit}>
            <div className="grid grid-cols-3 w-[60%] gap-10">
              <Consultation
                background={"#D4E4EF"}
                part={"eye"}
                Onclick={Onclick}
              />
              <Consultation
                background={"#e0c3d1"}
                part={"body"}
                Onclick={Onclick}
              />

              <Consultation
                background={"#d8bba2"}
                part={"body"}
                Onclick={Onclick}
              />
              <Consultation
                background={"#8771f3"}
                part={"body"}
                Onclick={Onclick}
              />
              <Consultation
                background={"#FBF1CA"}
                part={"body"}
                Onclick={Onclick}
              />
            </div>
            <div className="w-[75%] h-[25em] my-10 border-4 py-12 px-6 flex gap-10">
              <div>
                <div className="w-full h-full">
                  <Calendar onChange={onChange} value={date} />
                </div>
              </div>
              <div className="flex flex-col gap-[2em]">
                <div className="grid grid-cols-3 w-[10] h-[10em] gap-3">
                  <Time time={"9:00 am"} Onclick={Onclick} />
                  <Time time={"10:00 am"} Onclick={Onclick} />
                  <Time time={"11:30 am"} Onclick={Onclick} />
                  <Time time={"1:00 pm"} Onclick={Onclick} />
                  <Time time={"1:30 pm"} Onclick={Onclick} />
                  <Time time={"2:30 pm"} Onclick={Onclick} />

                  {/* <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] hover:bg-[#8771f3] duration-[1000] ease-in text-white flex items-center justify-center">
                    <p className="w-full h-full"> 9:00 am</p>
                  </div>
                  <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] hover:bg-[#8771f3] duration-[1000] ease-in text-white flex justify-center items-center">
                    <p> 11:00 am</p>
                  </div>
                  <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] hover:bg-[#8771f3] duration-[1000] ease-in text-white flex justify-center items-center">
                    <p> 2:00 pm</p>
                  </div>
                  <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] hover:bg-[#8771f3] duration-[1000] ease-in text-white flex justify-center items-center">
                    <p> 2:30 pm</p>
                  </div>
                  <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] hover:bg-[#8771f3] duration-[1000] ease-in text-white flex justify-center items-center">
                    <p> 4:00 am</p>
                  </div>
                  <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] hover:bg-[#8771f3] duration-[1000] ease-in text-white flex justify-center items-center">
                    <p> 5:00 pm</p>
                  </div>
                  <div className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] hover:bg-[#8771f3] duration-[1000] ease-in text-white flex justify-center items-center">
                    <p> 6:00 pm</p>
                  </div> */}
                </div>
                <button className="w-[15em] h-[3em] uppercase rounded-[0.75em] bg-gradient-to-r from-[#6646FD] to-[#89A2DF] text-white content-center hover:bg-[#8771f3] duration-[1000] ease-in">
                  Book an appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
