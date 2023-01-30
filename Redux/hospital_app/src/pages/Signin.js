import React from "react";
function Signin() {
  return (
    <div className="w-full h-screen bg-[#f8f9fa]  flex justify-center items-center ">
      <div className="w-[28%] h-[80%] rounded-l-[3em] bg-[#3C5FC3]"></div>
      <div className="w-[32%] h-[80%] px-10 bg-[#EFEEFE] overflow-hidden rounded-r-[3em]">
        <h2 className="text-3xl text-[#141835] mt-24 font-bold">SIGNIN</h2>
        <form action="" className="w-[100%] h-[90%] my-[3em] flex-col items-center">
          <div className="flex gap-[1em]">
          </div>
          <div className="mb-5">
            <label htmlFor="" className="block text-[13px] font-thin">
              EMAIL
            </label>
            <input
              type="text"
              className="w-[85%] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="" className="block text-[13px] px-2 font-thin">
              PASSWORD
            </label>
            <input
              type="password"
              className="w-[85%] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
            />
          </div>
          <button className="w-[10em] h-[3em]  rounded-[0.75em] bg-[#6646FD] text-white content-center hover:bg-[#8771f3] duration-[1000] ease-in">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
