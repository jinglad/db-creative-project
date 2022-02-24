import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../Reused/Loading";
import Service from "./Service";

function Services() {
  const [services, setServices] = useState([]);
  const [firstThree, setFirstThree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMoreClicked, setViewMoreClicked] = useState(false);

  useEffect(() => {
    fetch("https://fast-citadel-29159.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setFirstThree(data.slice(0, 3));
        setLoading(false);
        // console.log(data);
      });
  }, []);

  // if (loading)
  //   return (
  //     <div style={{ height: "200px" }}>
  //       <Loading />
  //     </div>
  //   );

  return (
    <ServicesContainer>
      <ServicesHeading>
        Provide awesome <span style={{ color: "#7AB259" }}>sevices</span>
      </ServicesHeading>
      <div className="row">
        {!viewMoreClicked &&
          firstThree.length > 0 &&
          firstThree.map((service, i) => <Service key={i} service={service} />)}
        {viewMoreClicked &&
          services.length > 0 &&
          services.map((service, i) => <Service key={i} service={service} />)}
      </div>
      {!viewMoreClicked && (
        <SeeMoreBtn
          className="btn btn-dark"
          onClick={() => setViewMoreClicked(true)}
        >
          View More
        </SeeMoreBtn>
      )}
      {viewMoreClicked && (
        <SeeMoreBtn
          className="btn btn-dark"
          onClick={() => setViewMoreClicked(false)}
        >
          View Less
        </SeeMoreBtn>
      )}
    </ServicesContainer>
  );
}

export default Services;

const ServicesContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 4rem;
  padding: 2rem 4rem;
`;

const ServicesHeading = styled.h3`
  text-align: center;
  font-weight: bold;
`;

const SeeMoreBtn = styled.button`
  width: 15%;
  margin: auto;
  display: block;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
