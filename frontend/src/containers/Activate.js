import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();
  const verify_account = (e) => {
    // const uid = match.params.uid;
    // const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Navigate to="/" />;
  }

  return (
    <div class="rounded-[2.5rem] borderStyle p-1 m-10">
      <div class="rounded-[2.5rem] bg-white">
        <div class="rounded-[2.5rem] bg-color1 flex justify-around items-center relative p-10">
            <div>
              <h1 className="text-3xl font-black text-color3 py-2">
                Verify your Account:
              </h1>
              <button
                onClick={verify_account}
                type="submit"
                className="text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Verify
              </button>
            </div>
            <div>
              <img className="w-[300px]" src="/assets/boy1.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);
