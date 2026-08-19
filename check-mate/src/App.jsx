import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/signin" element={<Signin />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
