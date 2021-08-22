import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
  },
};

function RegService(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { oid, title, image, description, price } = props.order;
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [file, setFile] = useState(null);

  const img = `http://localhost:5000/${image}`;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updatefileUpload = () => {};

  return (
    <div className="col-md-6 mb-4">
      <ServiceListContainer>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img src={img} style={{ width: "50px", height: "50px" }} alt="" />
          </div>
          <div>
            <button
              onClick={() => props.removeService(oid)}
              className="btn btn-warning"
            >
              Remove
            </button>
            <button onClick={openModal} className="btn btn-primary ml-3">
              Edit
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              // contentLabel="Example Modal"
            >
              <div className="d-flex mb-4 justify-content-between">
                <h3>Update Order Information</h3>
                <div>
                  <button className="btn btn-danger" onClick={closeModal}>
                    close
                  </button>
                </div>
              </div>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    value={sessionStorage.getItem("name")}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    value={sessionStorage.getItem("email")}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setUpdateTitle(e.target.value)}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    value={description}
                    onChange={(e) => setUpdateDescription(e.target.value)}
                  />
                </div>
                <div className="form-group d-flex">
                  <div className="mr-5">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      value={price}
                      onChange={(e) => setUpdatePrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <input type="file" onChange={updatefileUpload} />
                  </div>
                </div>
                <button className="btn btn-primary">Update</button>
              </form>
            </Modal>
          </div>
        </div>
        <h5 className="font-weight-bold my-3">{title}</h5>
        <p className="text-secondary">{description}</p>
      </ServiceListContainer>
    </div>
  );
}

export default RegService;

const ServiceListContainer = styled.div`
  padding: 30px;
  box-shadow: 0 0 20px grey;
  border-radius: 10px;
`;
