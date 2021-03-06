import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import AddService from "./Components/Admin/AddService/AddService";

import Home from "./Components/Home/Home/Home";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./Components/Admin/ManageService/ManageService";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import Book from "./Components/Admin/Book/Book";
import AddReview from "./Components/Admin/AddReview/AddReview";
import AllOrderList from "./Components/Admin/AllOrderList/AllOrderList";
import AllService from "./Components/Home/AllService/AllService";
import Orders from "./Components/Admin/Orders/Orders";
import { usePageVisibility } from "react-page-visibility";
export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  const [serviceFakeData, setServiceFakeData] = useState([]);

  let isVisible = usePageVisibility();
  if (!isVisible) {
    // window.location.reload();
    console.log(!isVisible);
  }

  if (isVisible) {
    console.log(isVisible);
    var postInfoVisible = {
      id: 1,
      title: "visible",
      body: "bar",
      userId: 1,
    };
  }

  // function visible() {
  //   fetch("http://localhost:5000/addReview", {
  //     method: "post",
  //     body: JSON.stringify(postInfoVisible),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }
  // visible();
  return (
    <UserContext.Provider
      value={{
        log: [loggedIn, setLoggedIn],
        serviceOption: [serviceFakeData, setServiceFakeData],
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <AllService />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/service/:_id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageService">
            <ManageService />
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route to="/allOrderList">
            <AllOrderList></AllOrderList>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
