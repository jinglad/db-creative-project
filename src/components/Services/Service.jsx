import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ServiceContext } from "../../App";

function Service(props) {
  const { title, description } = props.service;
  const [service, setService] = useContext(ServiceContext);

  const icon = `data:image/jpeg;base64,${props.service.image.img}`;
  // const icon = `https://fast-citadel-29159.herokuapp.com/${props.service.image}`

  return (
    <SingleServiceContainer className="col-lg-4 col-md-6">
      <LinkTag to="/order" onClick={() => setService(props.service)}>
        <SingleService>
          <img className="w-25" src={icon} />
          <h5 className="font-weight-bold my-3">{title}</h5>
          <p>{description}</p>
        </SingleService>
      </LinkTag>
    </SingleServiceContainer>
  );
}

export default Service;

const SingleServiceContainer = styled.div`
  padding: 30px;
  transition: 0.5s;
  text-align: center;
  margin-top: 4rem;
  :hover {
    box-shadow: 0 0 10px gray;
    border-radius: 10px;
  }
`;

const SingleService = styled.div``;

const LinkTag = styled(Link)`
  text-decoration: none !important;
  color: black !important;
`;
