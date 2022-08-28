import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch()
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contacts) => contacts.email === email && email
    );
    const checkNumber = contacts.find(
      (contacts) => parseInt(contacts.number) === parseInt(number) && number
    );
    if (!email || !name || !number) {
      return toast.warning("Please fill in all feilds");
    }
    if (checkEmail) {
      return toast.error("This email alreay exixts");
    }
    if (checkNumber) {
      return toast.error("This number alreay exixts");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({ type: "ADD_CONTACT", payload: data })
    toast.success("Student added successfully")
    // history(-1)
  };
  console.log(contacts);
  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Add Student</h1>
      <div className="row">
        <div className="col-md-6 shadow p-5 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="number"
                placeholder="Phone number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
