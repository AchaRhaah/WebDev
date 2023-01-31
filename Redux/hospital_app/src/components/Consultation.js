import React from "react";

function Consultation({ part, Onclick, background }) {
  return (
    <div
      id="consultation"
      onClick={Onclick}
      className="w-[10em] h-[3em] uppercase rounded-[0.75em]  text-[#151736] flex items-center justify-center hover:opacity-75 duration-[1000] ease-in"
      style={{ background: background }}
    >
      {part}
    </div>
  );
}

export default Consultation;
