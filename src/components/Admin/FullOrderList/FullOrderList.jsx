import { useEffect, useState } from "react";
import Sidebar from "../../Customer/Sidebar/Sidebar";
import Loading from "../../Reused/Loading";
import SingleOrder from "./SingleOrder";

function FullOrderList() {
  const [orders, setOrders] = useState([]);
  // const [rejected, setRejected] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://fast-citadel-29159.herokuapp.com/fullOrderList`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

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
                {orders?.length > 0 &&
                  orders.map((order, i) => (
                    <SingleOrder
                      key={i}
                      // setRejected={setRejected}
                      order={order}
                    />
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
