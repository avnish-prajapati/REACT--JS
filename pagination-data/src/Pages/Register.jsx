function Register() {
  return (
    <div className="container py-5">
      <div className="w-50 mx-auto card p-4">
        <h2 className="text-center mb-4">Register</h2>

        <input type="text" className="form-control mb-3" placeholder="Name" />

        <input type="email" className="form-control mb-3" placeholder="Email" />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-dark">Register</button>
      </div>
    </div>
  );
}

export default Register;
