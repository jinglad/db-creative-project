import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import AddService from "./components/Admin/AddService/AddService";
import FullOrderList from "./components/Admin/FullOrderList/FullOrderList";
import CustomerFeedback from "./components/Customer/CustomerFeedback/CustomerFeedback";
import Order from "./components/Customer/Order/Order";
import ServiceList from "./components/Customer/ServiceList/ServiceList";
import UpdateOrder from "./components/Customer/ServiceList/UpdateOrder";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";

export const UserContext = createContext();
export const ServiceContext = createContext();
export const AdminContext = createContext();
export const AllServiceContext = createContext();
export const UpdatedContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [service, setService] = useState({});
  const [loggedInAdmin, setLoggedInAdmin] = useState([]);
  const [allService, setAllService] = useState([]);
  const [updated, setUpdated] = useState(1);

  // useEffect(() => {
  //   fetch("https://fast-citadel-29159.herokuapp.com/admins")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLoggedInAdmin(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://fast-citadel-29159.herokuapp.com/isAdmin", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ email: loggedInUser.email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoggedInAdmin(data);
  //       console.log(data);
  //     });
  // }, [loggedInUser.email]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <AdminContext.Provider value={[loggedInAdmin, setLoggedInAdmin]}>
        <ServiceContext.Provider value={[service, setService]}>
          <AllServiceContext.Provider value={[allService, setAllService]}>
            <UpdatedContext.Provider value={[updated, setUpdated]}>
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <PrivateRoute path="/feedback">
                    <CustomerFeedback />
                  </PrivateRoute>
                  <PrivateRoute path="/order">
                    <Order />
                  </PrivateRoute>
                  <PrivateRoute path="/servicelist">
                    <ServiceList />
                  </PrivateRoute>
                  <PrivateRoute path="/add-admin">
                    <AddAdmin />
                  </PrivateRoute>
                  <PrivateRoute path="/add-service">
                    <AddService />
                  </PrivateRoute>
                  <PrivateRoute path="/full-order-list">
                    <FullOrderList />
                  </PrivateRoute>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/updateOrder/:id">
                    <UpdateOrder />
                  </Route>
                </Switch>
              </Router>
            </UpdatedContext.Provider>
          </AllServiceContext.Provider>
        </ServiceContext.Provider>
      </AdminContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
