import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #fbd062;
  height: 1000px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: white;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
`;

export const HeaderMainContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 0 2rem;
`;

export const HeaderLeft = styled.div`
  margin-top: 5rem;
`;

export const HeaderLeftHeading = styled.h1`
  font-weight: bold;
  font-size: 4rem;
`;

export const HeaderLeftContent = styled.div`
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const HeaderLeftButton = styled.button`
  color: white !important;
  padding: 8px 28px;
  background: black;
  text-decoration: none !important;
  border-radius: 5px;
  outline: none;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const HeaderRight = styled.div``;

export const HeaderRightImg = styled.img`
  margin-left: 16rem;
`;
