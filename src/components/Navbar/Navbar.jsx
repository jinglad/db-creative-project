import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";
import Logo from "../../images/logos/logo.png";
import { handleSignOut } from "../Login/loginManager";

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const signOut = () => {
    handleSignOut().then((res) => {
      setLoggedInUser(res);
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("email");
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img src={Logo} className="w-50" alt="Creative Agency" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <MenuLink className="nav-link" to="/">
                Home
              </MenuLink>
            </li>
            <li className="nav-item">
              <MenuLink className="nav-link" to="/">
                Services
              </MenuLink>
            </li>
            <li className="nav-item">
              <MenuLink className="nav-link" to="/servicelist">
                Dashboard
              </MenuLink>
            </li>
            <li className="nav-item">
              <MenuLink className="nav-link" href="/">
                Portfolio
              </MenuLink>
            </li>
            <li className="nav-item">
              <MenuLink className="nav-link" href="/">
                Our Team
              </MenuLink>
            </li>
            <li className="nav-item">
              <MenuLink className="nav-link" href="/">
                Contact Us
              </MenuLink>
            </li>
            {!sessionStorage.getItem("email") ? (
              <LogButton className="btn btn-warning">
                <Link to="/login" className="text-decoration-none text-white">
                  Login
                </Link>
              </LogButton>
            ) : (
              <LogButton onClick={signOut} className="btn btn-warning">
                Logout
              </LogButton>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: black !important;
  font-weight: 600;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  font-size: 20px;
  :hover {
    background-color: #173131;
    color: white !important;
  }
`;

const LogButton = styled.button`
  color: White !important;
  font-weight: 600;
  font-size: 20px;
  background-color: black !important;
`;
