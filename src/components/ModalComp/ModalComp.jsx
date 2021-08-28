import Modal from "react-modal";

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

const ModalComp = ({ modalIsOpen, closeModal }) => {
  return (
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
      <div>
        <div className="form-group">
          <label style={{ fontSize: "18px", marginBottom: "10px" }}>
            Service Description
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            // placeholder={description}
            // onChange={(e) => setUpdateDescription(e.target.value)}
          />
        </div>
        <div className="form-group d-flex">
          <div className="mr-5">
            <label style={{ fontSize: "18px", marginBottom: "10px" }}>
              Service Price
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              // placeholder={price}
              // onChange={(e) => setUpdatePrice(e.target.value)}
            />
          </div>
          <div className="mt-5">
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
              // onChange={updatefileUpload}
            />
          </div>
        </div>
        <button
          // onClick={() => updateService(updateID)}
          className="btn btn-primary"
        >
          Update
        </button>
      </div>
    </Modal>
  );
};

export default ModalComp;
