import { useState } from "react";

const SingleOrder = ({ order }) => {
  // const [status, setStatus] = useState("");

  // console.log(order);

  // const handleStatusChange = (e) => {
  //   if (status === "reject") {
  //     fetch(
  //       `https://fast-citadel-29159.herokuapp.com/deleteOrder/${order.oid}`,
  //       {
  //         method: "DELETE",
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data) {
  //           alert("Project Rejected...");
  //           setRejected(1 + 1);
  //         }
  //       });
  //   } else if (status !== "reject") {
  //     fetch("https://fast-citadel-29159.herokuapp.com/updateStatus", {
  //       method: "PUT",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify({ id: order._id }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data) {
  //           alert("Status Updated");
  //         }
  //       });
  //   }
  // };

  // console.log(status);

  return (
    <tr className="border">
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.service}</td>
      <td>{order.description}</td>
      <td>
        <span className="p-2 bg-white border rounded">Pending</span>
      </td>
    </tr>
  );
};

export default SingleOrder;
