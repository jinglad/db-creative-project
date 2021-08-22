import Navbar from "../Navbar/Navbar";
import { HeaderContainer } from "./header.style";
import HeaderMain from "./HeaderMain";

function Header() {
  return (
    <HeaderContainer className="container-fluid">
      <Navbar />
      <HeaderMain />
    </HeaderContainer>
  );
}

export default Header;
