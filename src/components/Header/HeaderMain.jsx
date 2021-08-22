import {
  HeaderLeft,
  HeaderLeftButton,
  HeaderLeftContent,
  HeaderLeftHeading,
  HeaderMainContainer,
  HeaderRight,
  HeaderRightImg,
} from "./header.style";

import HeaderImg from "../../images/logos/Frame.png";

function HeaderMain() {
  return (
    <HeaderMainContainer className="row">
      <HeaderLeft className="col-md-4">
        <HeaderLeftHeading>
          Let's Grow Your Brand To The Next Level
        </HeaderLeftHeading>
        <HeaderLeftContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dicta
          molestiae a, maiores dolorem esse.
        </HeaderLeftContent>
        <HeaderLeftButton>Hire Us</HeaderLeftButton>
      </HeaderLeft>
      <HeaderRight className="col-md-8">
        <HeaderRightImg src={HeaderImg} className="img-fluid w-75" />
      </HeaderRight>
    </HeaderMainContainer>
  );
}

export default HeaderMain;
