import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

function CustomerFeedback() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [review, setReview] = useState("");
  const history = useHistory();
  const [loggedInUser] = useContext(UserContext);

  // console.log(loggedInUser);

  const feedbackSubmit = (e) => {
    e.preventDefault();
    fetch("https://fast-citadel-29159.herokuapp.com/addFeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        position,
        review,
        image: loggedInUser.photo,
      }),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Thank you for your valuable feedback....");
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
        <div className="col-md-8 mt-5">
          <h1 className="font-weight-bold mb-3">Review</h1>
          <div className="bg-light p-5 rounded mb-4">
            <form style={{ width: "600px", marginTop: "80px" }}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  // value={loggedInUser.email}
                  // ref={register({ required: true })}
                  placeholder="Your email address"
                  className="form-control form-control-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  // value={loggedInUser.name}
                  // ref={register({ required: true })}
                  placeholder="Your name / comapny's name"
                  className="form-control form-control-lg"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="position"
                  // ref={register({ required: true })}
                  placeholder="Your Position"
                  className="form-control form-control-lg"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  // ref={register({ required: true })}
                  cols="15"
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Your Review"
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
              </div>
              <div>
                <input
                  onClick={feedbackSubmit}
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
}

export default CustomerFeedback;
