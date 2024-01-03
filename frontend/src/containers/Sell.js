import React from "react";
import { Link } from "react-router-dom";

const Sell = () => {
  return (
    <div className="lg:px-20">
      <div class="rounded-[2.5rem] borderStyle p-1 m-10">
        <div class="rounded-[2.5rem] bg-white">
          <div class="rounded-[2.5rem] bg-color1 flex justify-around items-center relative p-10">
            <div>
              <h1 className="text-3xl font-black text-color3 py-2">
                You want to sell your computer
              </h1>
              <h1 className="font-bold py-2">try to complete this Form</h1>
              <form>
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
                    name="email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="your name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Model
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="Enter pc model"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    company
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="Enter pc company"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Operating system
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="Enter pc Operating system"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Processor company
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="Enter pc Processor company"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Processor model
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="Enter pc Processor model"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    graphics Card
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="Enter pc graphics Card"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    memory
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="Enter pc memory"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    storage
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    minLength="6"
                    placeholder="Enter pc storage"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  submit
                </button>
              </form>
            </div>
            <img className="w-[500px]" src="/assets/girl1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
