import { Routes, Route } from "react-router-dom";
import React from "react";
import Content from "../components/Content";
import About from "../components/About";
import Login from "../components/Login";
import Register from "../components/Register";
import DetailJob from "../components/DetailJob";

const Routess = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job-vacancy/:id" element={<DetailJob />} />
      </Routes>
    </>
  );
};

export default Routess;
