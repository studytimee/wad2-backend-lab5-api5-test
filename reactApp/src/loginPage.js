import React, { useContext, useState,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from './authContext';
import { MoviesContext } from './moviesContext';
import { Link } from "react-router-dom";

const LoginPage = props => {
  const context = useContext(AuthContext)
  const moviesContext = useContext(MoviesContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login =  () => {
    console.log("call login authenticate");
    context.authenticate(email, password);
    console.log(`inside login function check is authenticated? ${context.isAuthenticated}`);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    moviesContext.setAuthenticated(context.isAuthenticated) 
    return <Redirect to={from} />;
  }
  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input id="email" placeholder="email" onChange={e => {
        setEmail(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={login}>Log in</button>
      <p>Not Registered?
      <Link to="/signup">Sign Up!</Link></p>
    </>
  );
};

export default LoginPage;