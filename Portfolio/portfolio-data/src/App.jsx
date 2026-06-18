import React from "react";
import { Routes, Route, Link } from "react-router";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Skills from "./screens/Skills";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Project from "./screens/Project";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </>
  );
}
