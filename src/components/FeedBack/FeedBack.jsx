import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../Reused/Loading";
import Review from "./Review";

function FeedBack() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fast-citadel-29159.herokuapp.com/feedbacks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      });
  }, []);

  return (
    <FeedBackContainer>
      <FeedBackHeading>
        Clients <span style={{ color: "#7AB259" }}>Feedback</span>
      </FeedBackHeading>
      <div className="row">
        {feedbacks?.length > 0 &&
          feedbacks?.map((feedback, i) => (
            <Review key={i} feedback={feedback} />
          ))}
      </div>
    </FeedBackContainer>
  );
}

export default FeedBack;

const FeedBackContainer = styled.div`
  padding: 3rem;
`;

const FeedBackHeading = styled.h3`
  margin: 5rem 0;
  text-align: center;
  font-weight: bold;
`;
