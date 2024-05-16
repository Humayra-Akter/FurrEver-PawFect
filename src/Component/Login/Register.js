import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";
import bg from "../../images/output-onlinepngtools.png";
import bgg from "../../images/faq-bg.jpg";
import admin from "../../images/admin.png";
import customer from "../../images/customer.png";
import staff from "../../images/staff.png";
import vet from "../../images/veterinarian.png";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let signInError;
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [selectedRole, setSelectedRole] = useState("");
  const [roleError, setRoleError] = useState(null); // Add state for role error

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setRoleError(null); // Clear the role error when a role is selected
  };

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-600">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    if (!selectedRole) {
      setRoleError("Please select a role.");
      return;
    }
    setRoleError(null); // Clear the error if a role is selected

    data.role = selectedRole;
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

    // user data to the server
    const userData = {
      name: data.name,
      email: data.email,
      role: data.role,
    };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "user added successfully") {
          toast.success("Welcome to Furrever-Pawfect");
        } else {
          toast.error("Failed to add user to the database");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(data);
  };

  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="pb-20 pt-24"
    >
      <div className="absolute top-16 inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <div className="mx-auto max-w-2xl">
        <div className="flex justify-between gap-3">
          {/* Role Selection Card */}
          <div
            style={{
              background: `url(${bgg})`,
              backgroundSize: "cover",
            }}
            className="card bg-transparent border-primary border shadow-xl w-1/3"
          >
            <div className="card-body">
              <h1 className="text-center text-2xl text-secondary font-mono font-extrabold mt-4 mb-6">
                Choose Role
              </h1>
              <div className="form-control w-full pb-4">
                <button
                  className={`${
                    selectedRole === "admin"
                      ? "bg-primary text-secondary"
                      : "bg-gray-600 text-white"
                  } w-full py-1 gap-2 font-mono flex items-center justify-center rounded mb-4`}
                  onClick={() => handleRoleSelection("admin")}
                >
                  <img src={admin} className="w-10" />
                  Admin
                </button>
                <button
                  className={`${
                    selectedRole === "stuff"
                      ? "bg-primary text-secondary"
                      : "bg-gray-600 text-white"
                  }  w-full py-1 gap-2 flex items-center font-mono justify-center rounded mb-4`}
                  onClick={() => handleRoleSelection("stuff")}
                >
                  <img src={staff} className="w-10" />
                  Stuff
                </button>
                <button
                  className={`${
                    selectedRole === "vet"
                      ? "bg-primary text-secondary"
                      : "bg-gray-600 text-white"
                  }  w-full py-1 gap-2 font-mono flex items-center justify-center rounded mb-4`}
                  onClick={() => handleRoleSelection("vet")}
                >
                  <img src={vet} className="w-10" />
                  Vet
                </button>
                <button
                  className={`${
                    selectedRole === "customer"
                      ? "bg-primary text-secondary"
                      : "bg-gray-600 text-white"
                  }  w-full py-1 gap-2  font-mono flex items-center justify-center rounded mb-4`}
                  onClick={() => handleRoleSelection("customer")}
                >
                  <img src={customer} className="w-10" />
                  Customer
                </button>
                {roleError && (
                  <p className="text-red-600 mt-2">
                    <small>{roleError}</small>
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Registration Card */}
          <div
            style={{
              background: `url(${bgg})`,
              backgroundSize: "cover",
            }}
            className="card bg-transparent border-primary border shadow-xl w-2/3"
          >
            <div className="card-body">
              <h1 className="text-center text-2xl text-secondary font-mono font-extrabold">
                REGISTER
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name  */}
                <div className="form-control w-full pb-2">
                  <label className="label">
                    <span className="label-text font-mono font-bold text-md">
                      Name
                    </span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your name"
                    name="name"
                    className="input input-sm input-bordered w-full"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name is required",
                      },
                    })}
                  />
                  <label>
                    {errors.name?.type === "required" && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* email  */}
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
                {/* pass  */}
                <div className="form-control w-full pb-6">
                  <label className="label">
                    <span className="label-text font-mono font-bold text-md">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
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
                <input
                  className="btn btn-sm text-xs w-full border-accent text-secondary font-bold font-mono bg-primary"
                  value="REGISTER"
                  type="submit"
                />
                <p className="text-center">
                  <small className="font-semibold">
                    Already have an account?{" "}
                    <Link className="text-green-700 font-mono" to="/login">
                      Login
                    </Link>
                  </small>
                </p>
                <div className="divider text-secondary">OR</div>
                <button
                  onClick={() => signInWithGoogle()}
                  className="btn btn-sm text-xs w-full border-accent text-secondary font-bold font-mono bg-primary"
                >
                  SignIn With Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
