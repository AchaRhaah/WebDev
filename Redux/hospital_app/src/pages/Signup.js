import React, {useState} from "react";
import {  Link } from "react-router-dom";
function Signup() {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '', 
    phoneNumber: 0,
    password: ''
  })

  const handleChange = (e) => {
    setUserInfo(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="w-full h-screen bg-[#f8f9fa]  flex justify-center items-center ">
      <div className="w-[28%] h-[80%] rounded-l-[3em] bg-[#3C5FC3]"></div>
      <div className="w-[32%] h-[80%] px-10 bg-[#EFEEFE] overflow-hidden rounded-r-[3em]">
        <h2 className="text-3xl text-[#141835] mt-14 font-bold">Sign Up</h2>
        <form action="" onSubmit={handleSubmit} className="w-[100%] h-[90%] my-5">
          <div className="flex gap-[1em]">
            <div className="mb-5">
              <label htmlFor="" className="block text-[13px] font-thin">
                FIRST NAME
              </label>
              <input
                onChange={handleChange}
                id="firstName"
                type="text"
                className="w-[4] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
              />
            </div>
            <div className="">
              <label htmlFor="" className="block text-[13px] font-thin">
                LAST NAME
              </label>
              <input
                onChange={handleChange}
                id="lastName"
                type="text"
                className="w-[4] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="" className="block text-[13px] font-thin">
              EMAIL
            </label>
            <input
              onChange={handleChange}
              id="email"
              type="text"
              className="w-[85%] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="block text-[13px] font-thin">
              ADDRESS
            </label>
            <input
              onChange={handleChange}
              id="address"
              type="text"
              className="w-[85%] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="block text-[13px] font-thin">
              PHONE NUMBER
            </label>
            <input
              onChange={handleChange}
              id="phoneNumber"
              type="text"
              className="w-[85%] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="block text-[13px] px-2 font-thin">
              PASSWORD
            </label>
            <input
              onChange={handleChange}
              id="passwor"
              type="password"
              className="w-[85%] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="block text-[13px] font-thin">
              CONFIRM PASSWORD
            </label>
            <input
              onChange={handleChange}
              type="password"
              className="w-[85%] h-[2.5em] rounded-[0.75em] px-2 focus: outline-[#5D67A3]"
            />
          </div>
          <Link to="/signin" className="block underline mb-5">
            Aready have an account
          </Link>
          <button className="w-[10em] h-[3em]  rounded-[0.75em] bg-[#6646FD] text-white content-center hover:bg-[#8771f3] duration-[1000] ease-in">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
