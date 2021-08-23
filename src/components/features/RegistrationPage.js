import React from "react";
// import { Switch, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
// import RegistrationOutput from "./RegistrationOutput";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";

const RegistrationPage = () => {
    return (
        <>
            <HomeNavbar />
            <RegistrationForm/>
            <Footer />
        </>

    );
}

export default RegistrationPage
