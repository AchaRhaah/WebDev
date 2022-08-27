import React from "react";
import { Link, useParams } from "react-router-dom";

function EditContact() {
  const { id } = useParams();
  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Edit Student {id}</h1>
      <div className="row">
        <div className="col-md-6 shadow p-5 mx-auto">
          <form>
            <div className="form-group my-2">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group my-2">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <input
                type="number"
                placeholder="Phone number"
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <input
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
    </div>
  );
}

export default EditContact;
