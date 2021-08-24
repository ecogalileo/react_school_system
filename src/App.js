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

import AddStudent from './components/Students/AddStudent';
import EditStudent from './components/Students/EditStudent';
import Student from './components/Students/Student';
import Students from './components/Students/Students';

import teacherTable from './pages/teacherTable';
import RegistrationPage from './components/features/RegistrationPage';
import ListOfStudentApplicants from './components/features/ListOfStudentApplicants';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/login" component={login} />
        <Route exact path="/AdminDashboard" component={AdminDashboard} />
        <Route exact path="/AdminSidebar" component={AdminSidebar} />

        <Route exact path="/students" component={Students} />
        <Route exact path="/students/add" component={AddStudent} />
        <Route exact path="/students/edit/:id" component={EditStudent} />
        <Route exact path="/students/:id" component={Student} />

        <Route exact path="/teacherTable" component={teacherTable} />
        <Route exact path="/RegistrationPage" component={RegistrationPage} />
        <Route
          exact
          path="/ListOfStudentApplicants"
          component={ListOfStudentApplicants}
        />
      </Switch>
    </>
  );
}

export default App;
