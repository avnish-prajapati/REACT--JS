import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Screens/Home";
import Addblog from "./Screens/addblog";
import Editblog from "./Screens/EditBlog";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addblog />} />
        <Route path="/edit/:id" element={<Editblog />} />
      </Routes>
    </BrowserRouter>
  );
}
