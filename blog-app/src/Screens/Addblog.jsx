import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../redux/BlogSlice";
import { useNavigate } from "react-router";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveBlog = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      alert("Please Fill All Fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title: title,
      content: content,
    };

    dispatch(addBlog(newBlog));

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Blog</h2>

        <form onSubmit={saveBlog}>
          <div className="mb-3">
            <label className="form-label">Blog Title</label>

            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Blog Content</label>

            <textarea
              className="form-control"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <button className="btn btn-success me-2">Save</button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
