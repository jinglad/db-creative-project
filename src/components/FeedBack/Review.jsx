import styled from "styled-components";

function Review(props) {
  // const { photo } = props.feedback;
  const { name, position, review, image } = props.feedback;

  return (
    <div className="col-md-4 mb-3">
      <ReviewContainer>
        <div className="row mb-3">
          <div className="col-sm-3">
            <img src={image} className="img-fluid rounded-circle" alt="" />
          </div>
          <div className="col-sm-9">
            <h4 className="font-weight-bold">{name}</h4>
            <h6>{position}</h6>
          </div>
        </div>
        <div>
          <p className="text-secondary">{review}</p>
        </div>
      </ReviewContainer>
    </div>
  );
}

export default Review;

const ReviewContainer = styled.div`
  padding: 15px 14px;
  border: 1px solid black;
`;
