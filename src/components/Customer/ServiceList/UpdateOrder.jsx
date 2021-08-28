import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AllServiceContext, UpdatedContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const UpdateOrder = () => {
  const { id } = useParams();
  const [allService, setAllService] = useContext(AllServiceContext);
  const history = useHistory();
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [file, setFile] = useState(null);
  const [updated, setUpdated] = useContext(UpdatedContext);

  const service = allService.find((item) => Number(item.oid) === Number(id));

  // console.log(service);
  const updatefileUpload = (e) => {
    const newFile = e.target.files[0];
    console.log(newFile);
    setFile(newFile);
  };

  const updateService = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", id);
    formData.append("description", updateDescription);
    formData.append("price", updatePrice);
    fetch("http://localhost:5000/updateOrder", {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Updated Successfully...");
          if (success) {
            setUpdated(1 + 1);
          }
          history.push("/servicelist");
        }
      });
    // console.log(updateDescription, updatePrice);
    // console.log(props.order);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-5">
          <h1 className="font-weight-bold mb-3">Update Ordered Service</h1>
          <div className="bg-light p-5 rounded mb-4">
            <h4>
              Service - <span className="text-secondary">{service.title}</span>
            </h4>
            <form style={{ width: "600px", marginTop: "30px" }}>
              <div className="form-group">
                <label style={{ fontSize: "18px", marginBottom: "10px" }}>
                  Service Description
                </label>
                <textarea
                  name="description"
                  cols="15"
                  rows="5"
                  className="form-control font-weight-500 form-control-lg"
                  name="description"
                  placeholder={service.description}
                  onChange={(e) => setUpdateDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group row">
                <div className="col-sm-4">
                  <label style={{ fontSize: "18px", marginBottom: "10px" }}>
                    Service Price
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={service.price}
                    onChange={(e) => setUpdatePrice(e.target.value)}
                  />
                </div>
                <div className="ml-2 col-sm-4">
                  <label
                    htmlFor="#serviceImage"
                    style={{
                      fontSize: "18px",
                      marginBottom: "10px",
                      marginRight: "10px",
                    }}
                  >
                    Update file
                  </label>
                  <input
                    id="serviceImage"
                    type="file"
                    onChange={updatefileUpload}
                  />
                </div>
              </div>
              <div>
                <input
                  onClick={updateService}
                  type="submit"
                  className="btn btn-dark"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrder;
