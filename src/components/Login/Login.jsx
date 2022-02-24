import { Link, useHistory, useLocation } from "react-router-dom";
import { AdminContext, UserContext } from "../../App";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  loginToken,
} from "./loginManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import logo from "../../images/logos/logo.png";

initializeLoginFramework();

function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [loggedInAdmin, setLoggedInAdmin] = useContext(AdminContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    error: "",
    success: "",
  });

  // console.log(loggedInAdmin);

  console.log(loggedInUser);

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      sessionStorage.setItem("email", res.email);
      sessionStorage.setItem("name", res.name);
      fetch("https://fast-citadel-29159.herokuapp.com/isAdmin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: res.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoggedInAdmin(data);
          // console.log(data);
          history.replace(from);
        });
    });
  };

  // console.log(loggedInUser.email);

  return (
    <div className="container">
      <div className="text-center mt-5">
        <Link to="/">
          <img src={logo} className="img-fluid w-25" alt="" />
        </Link>
      </div>
      <LoginBox className="text-center">
        <div className="mt-5">
          <h3>Login With</h3>
          <GoogleSignInBtn onClick={googleSignIn}>
            {" "}
            <GoogleIcon icon={faGoogle} /> Continue With Google
          </GoogleSignInBtn>
        </div>
      </LoginBox>
    </div>
  );
}

export default Login;

const LoginBox = styled.div`
  padding: 50px;
  box-shadow: 0 0 10px gray;
  width: 400px;
  height: 320px;
  margin: 0 auto;
  margin-top: 200px;
  border-radius: 10px;
`;

const GoogleSignInBtn = styled.button`
  margin-top: 20px;
  width: 270px;
  padding: 5px 8px;
  border: 1px solid gray;
  border-radius: 15px;
  outline: none;
`;

const GoogleIcon = styled(FontAwesomeIcon)`
  color: green;
  margin-right: 25px;
  margin-left: -10px;
`;
