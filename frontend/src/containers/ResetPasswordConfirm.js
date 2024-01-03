import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../actions/auth";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });
  const { uid, token } = useParams();

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password_confirm(uid, token, new_password, re_new_password);
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
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="new_password"
                    value={new_password}
                    onChange={(e) => onChange(e)}
                    minLength="6"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="re_new_password"
                    value={re_new_password}
                    onChange={(e) => onChange(e)}
                    minLength="6"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Confirm New Password
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
