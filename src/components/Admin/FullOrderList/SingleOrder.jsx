import { useState } from "react";

const SingleOrder = ({ order, setRejected }) => {
  const [status, setStatus] = useState("");

  const handleStatusChange = (e) => {
    if (status === "reject") {
      fetch(`http://localhost:5000/deleteOrder/${order.oid}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("Project Rejected...");
            setRejected(1 + 1);
          }
        });
    } else if (status !== "reject") {
      fetch("http://localhost:5000/updateStatus", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: order.oid, status }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("Status Updated");
          }
        });
    }
  };

  // console.log(status);

  return (
    <tr className="border">
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.title}</td>
      <td>{order.description}</td>
      <td>
        <select
          onClick={(e) => setStatus(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            padding: "5px",
          }}
        >
          <option
            value="pending"
            selected={order.status === "pending" ? true : false}
          >
            Pending
          </option>
          <option
            value="in-progress"
            selected={order.status === "in-progress" ? true : false}
          >
            In Progress
          </option>
          <option
            value="done"
            selected={order.status === "done" ? true : false}
          >
            Done
          </option>
          <option value="reject">Reject</option>
        </select>
        <button
          className="ml-2 btn btn-primary btn-sm"
          onClick={handleStatusChange}
        >
          Submit
        </button>
      </td>
    </tr>
  );
};

export default SingleOrder;
