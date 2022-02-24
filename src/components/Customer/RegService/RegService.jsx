import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

function RegService({ order }) {
  const { _id, service, image, description } = order;
  // console.log(status);
  // console.log(order);
  // console.log();

  const img = `data:image/jpeg;base64,${image.img}`;

  // const img = `https://fast-citadel-29159.herokuapp.com/${image.}`;

  return (
    <div className="col-md-6 mb-4">
      <ServiceListContainer>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img src={img} style={{ width: "50px", height: "50px" }} alt="" />
          </div>
          {/* <div className="d-flex">
            <div>
              <button
                onClick={() => removeService(_id)}
                className={status !== "pending" ? "d-none" : "btn btn-warning"}
              >
                Remove
              </button>
            </div>
            <div>
              <Link to={`/updateOrder/${_id}`}>
                <button
                  className={
                    status !== "pending" ? "d-none" : "btn btn-primary ml-3"
                  }
                >
                  Edit
                </button>
              </Link>
            </div>
          </div> */}
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="font-weight-bold my-3">{service}</h5>
            <p className="text-secondary">{description}</p>
          </div>
          {/* <div className="mt-5">
            <p className="text-success">
              <small>pending</small>
            </p>
          </div> */}
        </div>
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
