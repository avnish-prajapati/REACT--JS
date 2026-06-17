import React from "react";
import { Routes, Route, Link } from "react-router";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Skills from "./screens/Skills";
import About from "./screens/About";
import Contact from "./screens/Contact";

export default function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>Login</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}
