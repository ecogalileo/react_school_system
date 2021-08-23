import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
// import Content from "./components/Content";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Menu from "./pages/menu";
import Dropdown from "./components/Dropdown";
import contact from "./pages/contact";
import login from "./pages/login";
import DashBoard from "./pages/AdminDashboard";
import AdminSidebar from "./pages/AdminSidebar";
import RegistrationPage from "./components/features/RegistrationPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.addEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' exact component={Menu} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={contact} />
        <Route path='/login' exact component={login} />
        <Route path='/DashBoard' exact component={DashBoard} />
        <Route path='/AdminSidebar' exact component={AdminSidebar} />
        <Route path='/RegistrationPage' exact component={RegistrationPage}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
