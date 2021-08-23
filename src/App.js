// import React, { useState, useEffect } from "react";
import './App.css';
// import Footer from "./components/Footer";
// import Content from "./components/Content";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import Home from './pages';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Menu from './pages/menu';
// import Dropdown from "./components/Dropdown";
import contact from './pages/contact';
import login from './pages/login';
import AdminDashboard from './pages/AdminDashboard';
import AdminSidebar from './pages/AdminSidebar';
import StudentTable from './pages/studentTable';
import teacherTable from './pages/teacherTable';
import RegistrationPage from './components/features/RegistrationPage';
import pendingStudentsTable from './pages/pendingStudentsTable';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={contact} />
        <Route path="/login" exact component={login} />
        <Route path="/AdminDashboard" exact component={AdminDashboard} />
        <Route path="/AdminSidebar" exact component={AdminSidebar} />
        <Route path="/StudentTable" exact component={StudentTable} />
        <Route path="/teacherTable" exact component={teacherTable} />
        <Route
          path="/pending-students"
          exact
          component={pendingStudentsTable}
        />
        <Route path="/RegistrationPage" exact component={RegistrationPage} />
      </Switch>
    </>
  );
}

export default App;
