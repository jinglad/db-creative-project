import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ServiceContext, UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

function Order() {
  const [service, setService] = useContext(ServiceContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  const [submitting, setSubmitting] = useState(null);

  // console.log(loggedInUser);

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    // console.log(newFile);
    setFile(newFile);
  };

  const orderSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", service.title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("name", sessionStorage.getItem("name"));
    formData.append("email", sessionStorage.getItem("email"));
    formData.append("orderStatus", "pending");

    fetch("https://fast-citadel-29159.herokuapp.com/postOrder", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Your Order Submitted Successfully...");
          setSubmitting(false);
          history.push("/servicelist");
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-5">
          <h1 className="font-weight-bold mb-3">Order</h1>
          <div className="bg-light p-5 rounded mb-4">
            <form style={{ width: "600px", marginTop: "80px" }}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={loggedInUser?.name}
                  placeholder="Your name / company's name"
                  className="form-control form-control-lg font-weight-500"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={loggedInUser?.email}
                  placeholder="Your email address"
                  className="form-control form-control-lg font-weight-500"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="service"
                  value={service.title}
                  placeholder="Service Name"
                  className="form-control form-control-lg font-weight-500"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  cols="15"
                  rows="5"
                  className="form-control font-weight-500 form-control-lg"
                  name="description"
                  placeholder="Project Details"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group row">
                <div className="col-sm-4">
                  <input
                    className="form-control font-weight-500 form-control-lg"
                    type="text"
                    name="price"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="ml-2 col-sm-4">
                  <input
                    className="form-control-lg"
                    type="file"
                    name=""
                    id=""
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
              <div>
                {!submitting ? (
                  <input
                    onClick={orderSubmit}
                    type="submit"
                    className="btn btn-dark"
                    value="Submit"
                  />
                ) : (
                  <button className="btn btn-secondary">Submitting...</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
