import styled from "styled-components";
import slack from "../../images/logos/slack.png";
import google from "../../images/logos/google.png";
import netflix from "../../images/logos/netflix.png";
import airbnb from "../../images/logos/airbnb.png";
import uber from "../../images/logos/uber.png";

function CompanyWorkedWith() {
  return (
    <CompanyWorkedWithContainer>
      <ImgContainer className="row">
        <ImgDiv className="col-md-2">
          <Image src={slack} className="img-fluid w-75" />
        </ImgDiv>
        <ImgDiv className="col-md-2">
          <Image src={google} className="img-fluid w-75" />
        </ImgDiv>
        <ImgDiv className="col-md-2">
          <Image src={uber} className="img-fluid w-50" />
        </ImgDiv>
        <ImgDiv className="col-md-2">
          <Image src={netflix} className="img-fluid w-50" />
        </ImgDiv>
        <ImgDiv className="col-md-2">
          <Image src={airbnb} className="img-fluid w-75" />
        </ImgDiv>
      </ImgContainer>
    </CompanyWorkedWithContainer>
  );
}

export default CompanyWorkedWith;

const CompanyWorkedWithContainer = styled.div`
  margin: 5rem 0;
  width: 90%;
  margin: 5rem auto;
  /* text-align: center; */
`;

const ImgContainer = styled.div``;

const ImgDiv = styled.div`
  margin-right: 3rem;
`;

const Image = styled.img``;
