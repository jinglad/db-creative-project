import { useEffect, useState } from "react";
import Sidebar from "../../Customer/Sidebar/Sidebar";

function FullOrderList() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getOrders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-5">
          <h1 className="font-weight-bold mb-3">Order List</h1>
          <div className="bg-light p-5 rounded mb-4">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Service</th>
                  <th scope="col">Project Details</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 &&
                  orders.map((order) => (
                    <tr className="border">
                      <td>{order.name}</td>
                      <td>{order.email}</td>
                      <td>{order.title}</td>
                      <td>{order.description}</td>
                      <td className="btn btn-secondary">pending</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullOrderList;
