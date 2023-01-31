import React from "react";

function Time({ time, Onclick }) {
  return (
    <div
      id="time"
      onClick={Onclick}
      className="w-[6em] h-[3em]  rounded-[0.75em] bg-[#5837df] hover:bg-[#8771f3]  text-[#151736] flex items-center justify-center hover:opacity-75 duration-[1000] ease-in"
    >
      {time}
    </div>
  );
}

export default Time;
