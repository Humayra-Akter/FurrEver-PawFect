import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import eye from "../../images/eye-svgrepo-com.svg";
import eyeClose from "../../images/eye-close-svgrepo-com.svg";
import bg from "../../images/output-onlinepngtools.png";
import bgg from "../../images/faq-bg.jpg";
import Loading from "../Shared/Loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [loggedUser, setLoggedUser] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  let signInError;

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setLoggedUser(data);
      });
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    if (loggedUser) {
      signInWithEmailAndPassword(data.email, data.password);
      localStorage.setItem("userRole", data.role);
    } else {
      toast.error(
        `${data.email} or ${data.role} is invalid. Please check it again`
      );
    }
    const userRole = localStorage.getItem("userRole");
    navigate(`/${userRole}Dashboard`);
  };

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-600">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      className="pb-20 pt-16"
    >
      <div className="absolute top-16 inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <div
        style={{ background: `url(${bgg})`, backgroundSize: "cover" }}
        className="mx-auto max-w-md"
      >
        <div className="card bg-transparent border-primary border-2 shadow-xl">
          <div>
            <div className="card-body">
              <h1 className="text-center text-2xl text-secondary font-mono font-extrabold">
                LOGIN
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* email field */}
                <div className="form-control w-full pb-2">
                  <label className="label">
                    <span className="label-text font-mono font-bold text-md">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    className="input input-sm input-bordered w-full"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  <label>
                    {errors.email?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* role field */}
                <div className="form-control w-full pb-2">
                  <label className="label">
                    <span className="label-text font-mono font-bold text-md">
                      Select your Role
                    </span>
                  </label>
                  <select
                    name="role"
                    className="input input-sm input-bordered w-full"
                    {...register("role", {
                      required: {
                        value: true,
                        message: "Role is required",
                      },
                    })}
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="stuff">Stuff</option>
                    <option value="vet">Vet</option>
                    <option value="customer">Customer</option>
                  </select>
                  <label>
                    {errors.role?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.role.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Password field */}
                <div className="form-control w-full pb-4">
                  <label className="label">
                    <span className="label-text font-mono font-bold text-md">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="input input-sm input-bordered w-full"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <img
                          className="fa fa-eye w-4 text-gray-500"
                          src={eye}
                          alt="Show"
                        />
                      ) : (
                        <img
                          className="fa fa-eye w-4 text-gray-500"
                          src={eyeClose}
                          alt="Hide"
                        />
                      )}
                    </button>
                  </div>
                  <label>
                    {errors.password?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                {signInError}
                <p className="text-left mb-2">
                  <small className="font-semibold">
                    <Link className="font-mono" to="/register">
                      Forgot password?
                    </Link>
                  </small>
                </p>
                <input
                  className="btn btn-sm text-xs w-full border-accent text-secondary font-bold font-mono bg-primary"
                  value="LOGIN"
                  type="submit"
                />
              </form>
              <p className="text-center">
                <small className="font-semibold">
                  New to FurrEver-PawFect?{" "}
                  <Link className="font-mono text-green-700" to="/register">
                    Create new account
                  </Link>
                </small>
              </p>
              <div className="divider text-secondary">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-sm text-xs w-full border-accent text-secondary font-bold font-mono bg-primary"
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
