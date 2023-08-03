import React, { useState, createContext, useEffect } from "react";

// create context with adefault value
export const AuthContext = createContext({
  isAuthentcated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

// provider components

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthentcated: false,
    user: null,
  });

  useEffect(() => {
    // check tocken is exit or not
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (token) {
      // call api here for login user
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            localStorage.setItem("password", data.password);
            setState({
              isAuthentcated: true,
              user: data,
            });
          }
        });
    } else {
      localStorage.removeItem("token");
      alert("Please login your tocken is expire");
    }
  }, []);

  // login function

  const login = (username, password) => {
    // call api here
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.username);
          localStorage.setItem("password", data.password);
          setState({
            isAuthentcated: true,
            user: data,
          });
        } else {
          alert("Username and password is not valid");
        }
      });
  };

  // logout function

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setState({
      isAuthentcated: false,
      user: null,
    });
  };
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
