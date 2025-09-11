import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareerSupport from "./pages/CareerSupport";

export default function App() {
  return (
    <Router>
        <Header />
          <Routes>  
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/career" element={<CareerSupport/>} />
          </Routes>
       
        <Footer />
    
    </Router>
  );
}
