import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import PropertySearchPage from "./PropertySearchPage/Body.jsx";
import PropertyDetailPage from "./PropertyDetailPage/Body.jsx";
import UserProfilePage from "./UserProfilePage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/propertysearchpage" element={<PropertySearchPage />} />
        <Route path="/propertydetailpage" element={<PropertyDetailPage />} />
        <Route path="/userprofilepage" element={<UserProfilePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default Body;