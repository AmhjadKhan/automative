import React from "react";

const Login = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XjajmhiBkgTdj4JTuGm2M_j3LZwwTCcJVg&usqp=CAU"
            alt="cars"
          />
        </figure>
        <div className="card-body">
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-200">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-200">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered text-yellow-200" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
