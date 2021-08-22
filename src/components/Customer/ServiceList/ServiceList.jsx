import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import RegService from "../RegService/RegService";
import Sidebar from "../Sidebar/Sidebar";

function ServiceList() {
  const [orders, serOrders] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  const [deleted, setDeleted] = useState(1);

  useEffect(() => {
    fetch(
      `http://localhost:5000/customerOrders?email="${sessionStorage.getItem(
        "email"
      )}"`
    )
      .then((res) => res.json())
      .then((data) => {
        serOrders(data);
        console.log(data);
      });
  }, [deleted]);

  const removeService = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleted(deleted + 1);
      });
  };

  const updateService = (id) => {
    fetch();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-5">
          <h1 className="font-weight-bold">Service List</h1>
          <div className="bg-light p-5 rounded">
            <div className="row">
              {orders.length > 0 &&
                orders.map((order) => (
                  <RegService
                    key={order.oid}
                    removeService={removeService}
                    order={order}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
