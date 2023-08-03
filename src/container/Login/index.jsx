import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginContainer = () => {
  const { login, isAuthentcated } = useContext(AuthContext);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const checkingLoginStatus = () => {
    const _isLogin = isAuthentcated;
    setIsLoggedin(_isLogin);
  };

  useEffect(() => {
    checkingLoginStatus();
  }, []);

  useEffect(() => {
    checkingLoginStatus();
    if (isLoggedin) {
      navigate("/user");
    }
  }, [isLoggedin, isAuthentcated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    // login function call
    console.log(password.value);
    login(username.value, password.value);
    console.log(isAuthentcated);
  };

  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label>
          <span>User Name:-</span>
          <input type="text" placeholder="Enter your name" name="username" />
        </label>
        <label>
          <span>Password:-</span>
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginContainer;
