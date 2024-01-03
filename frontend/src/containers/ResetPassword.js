import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-around items-center">
      <div class="rounded-[2.5rem] borderStyle p-1 m-10">
        <div class="rounded-[2.5rem] bg-white">
          <div class="rounded-[2.5rem] bg-color1 flex justify-around items-center relative p-10 gap-4">
            <img
              className="absolute top-0 right-0 w-[70%]"
              src="/images/bg.svg"
              alt=""
            />
            <div>
              <h1 className="text-3xl font-black text-red-500 py-2">
                Request Password Reset
              </h1>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@domaine.com"
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Reset Password
                </button>
              </form>
            </div>
            <div>
              <img className="w-[300px]" src="/assets/boy1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
