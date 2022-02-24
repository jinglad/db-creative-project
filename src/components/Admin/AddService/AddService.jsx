import { useState } from "react";
import Sidebar from "../../Customer/Sidebar/Sidebar";
import LogoImage from "../../../images/logos/logo.png";
import { useHistory } from "react-router-dom";

function AddService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const history = useHistory();

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    console.log(newFile);
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    fetch("https://fast-citadel-29159.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          alert("service added");
          history.push("/");
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-5">
          <h1 className="font-weight-bold mb-3">Add Service</h1>
          <div className="bg-light p-5 rounded mb-4">
            <form style={{ width: "600px", marginTop: "80px" }}>
              <div className="d-flex">
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control form-control-lg"
                    placeholder="Enter Service Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={handleFileUpload}
                    type="file"
                    className="form-control-lg"
                    name="icon"
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  className="form-control form-control-lg"
                  placeholder="Enter Description"
                  cols="30"
                  rows="5"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  onClick={handleSubmit}
                  type="submit"
                  value="submit"
                  className="btn btn-dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddService;
