import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./Screens/Home";
import AddBlog from "./Screens/AddBlog";
import EditBlog from "./Screens/EditBlog";

function App() {
  // BrowserRouter pura routing handle karega // that sit

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}

        <Route path="/" element={<Home />} />

        {/* New Blog */}

        <Route path="/add" element={<AddBlog />} />

        {/* Edit Blog */}

        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
