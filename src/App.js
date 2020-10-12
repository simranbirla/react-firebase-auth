import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Posts from "./Posts";
import Images from "./Images";
import Albums from "./Albums";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div style={{ height: "100%" }}>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/images" component={Images} />
          <PrivateRoute exact path="/albums" component={Albums} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
