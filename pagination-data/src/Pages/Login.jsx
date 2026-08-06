function Login() {
  return (
    <div className="container py-5">
      <div className="w-50 mx-auto card p-4">
        <h2 className="text-center mb-4">Login</h2>

        <input type="email" className="form-control mb-3" placeholder="Email" />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-dark">Login</button>
      </div>
    </div>
  );
}

export default Login;
