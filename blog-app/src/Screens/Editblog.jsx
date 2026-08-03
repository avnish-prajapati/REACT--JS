import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBlog } from "../redux/BlogSlice";
import { useNavigate, useParams } from "react-router";

export default function EditBlog() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blog.blogs);

  const oldBlog = blogs.find((item) => item.id === Number(id));

  const [title, setTitle] = useState(oldBlog.title);

  const [content, setContent] = useState(oldBlog.content);

  const updateData = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      alert("Please Fill All Fields");

      return;
    }

    const updatedBlog = {
      id: Number(id),
      title: title,
      content: content,
    };

    dispatch(updateBlog(updatedBlog));

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Edit Blog</h2>

        <form onSubmit={updateData}>
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

          <button className="btn btn-warning me-2">Update</button>

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
