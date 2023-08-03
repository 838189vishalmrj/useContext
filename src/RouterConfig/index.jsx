import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "../container/Home";
import UserContainer from "../container/User";
import LoginContainer from "../container/Login";
import FooterComponent from "../component/Footer";
import HeaderComponent from "../component/Header";

const RouterConfigComp = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/user" element={<UserContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default RouterConfigComp;
