import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../redux/BlogSlice";
import { useNavigate } from "react-router";

export default function Home() {
  const { blogs } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h2>Blog Management</h2>

        <button className="btn btn-success" onClick={() => navigate("/add")}>
          Add Blog
        </button>
      </div>

      <hr />
      {blogs.length === 0 && (
        <div className="text-center mt-5">
          <h3>No Blog Found</h3>

          <p>Click on Add Blog button to create your first blog.</p>
        </div>
      )}

      <div className="row">
        {blogs.map((item) => {
          return (
            <div className="col-md-4 mt-3" key={item.id}>
              <div className="card shadow">
                <div className="card-body">
                  <h4>{item.title}</h4>

                  <p>{item.content}</p>

                  <button
                    className="btn btn-warning me-2"
                    onClick={() => navigate(`/edit/${item.id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteBlog(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
