import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

function EditContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state);

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contacts) => contacts.id !== parseInt(id) && contacts.email === email
    );
    const checkNumber = contacts.find(
      (contacts) => parseInt(contacts.id) !== parseInt(id) && contacts.number ===parseInt(number)
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
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student updated successfully");
    // history(-1)
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 my-5 text-center">Edit Student {id}</h1>
          <div className="row">
            <div className="col-md-6 shadow p-5 mx-auto">
              <form>
                <div className="form-group my-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                  <
                    type="submit"
                    value="Update Student"
                    className="btn btn-dark"
                  />
                  <Link to="/" className="btn btn-danger ml-6">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student contact with id: {id} does not exist
        </h1>
      )}
    </div>
  );
}

export default EditContact;
