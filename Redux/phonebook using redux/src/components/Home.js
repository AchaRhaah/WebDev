import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const contacts = useSelector(state => state)
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted sucessfully!")
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right px-5">
          <Link to="/add" className="btn btn-outline-dark">
            Add contact
          </Link>
        </div>
        <div className="col-md-6 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contacts, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contacts.name}</td>
                  <td>{contacts.email}</td>
                  <td>{contacts.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contacts.id}`}
                      className="btn btn-small btn-primary mr-2"
                    >
                      Edit
                    </Link>
                    <button type="button" className="btn btn-small btn-danger" onClick={() => deleteContact(contacts.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
