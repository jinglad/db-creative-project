import {
  faCartPlus,
  faCommentDots,
  faList,
  faPlus,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdminContext, UserContext } from "../../../App";
import LogoImage from "../../../images/logos/logo.png";

function Sidebar() {
  const [loggedInAdmin, setLoggedInAdmin] = useContext(AdminContext);
  const [loggedInUser] = useContext(UserContext);

  return (
    <SidebarConatiner>
      <div className="mb-5 ml-5">
        <Link to="/">
          <img className="w-50" src={LogoImage} alt="" />
        </Link>
      </div>
      <div
        className="ml-5 sidebar d-flex flex-column justify-content-between  py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <SidebarList>
            <SidebarLink to="/order">
              <FontAwesomeIcon icon={faCartPlus} /> Order
            </SidebarLink>
          </SidebarList>
          <SidebarList>
            <SidebarLink to="/servicelist">
              <FontAwesomeIcon icon={faList} /> Service-list
            </SidebarLink>
          </SidebarList>
          {loggedInAdmin && (
            <div>
              <SidebarList>
                <SidebarLink to="/full-order-list">
                  <FontAwesomeIcon icon={faList} /> Full-Order-list
                </SidebarLink>
              </SidebarList>
              <SidebarList>
                <SidebarLink to="/add-service">
                  <FontAwesomeIcon icon={faPlus} /> Add-Service
                </SidebarLink>
              </SidebarList>
              <SidebarList>
                <SidebarLink to="/add-admin">
                  <FontAwesomeIcon icon={faUserClock} /> Make Admin
                </SidebarLink>
              </SidebarList>
            </div>
          )}
          <SidebarList>
            <SidebarLink to="/feedback">
              <FontAwesomeIcon icon={faCommentDots} /> Review
            </SidebarLink>
          </SidebarList>
        </ul>
      </div>
    </SidebarConatiner>
  );
}

export default Sidebar;

const SidebarConatiner = styled.div`
  position: fixed;
`;

const SidebarList = styled.li`
  margin-bottom: 1.5rem;
`;

const SidebarLink = styled(Link)`
  text-decoration: none !important;
  color: black !important;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  :hover {
    /* color: aqua !important; */
    background: #104646;
    color: white !important;
  }
`;
