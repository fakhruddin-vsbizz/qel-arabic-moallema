import React, { useState } from "react";

const SessionPopup = ({ session, list, start }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    start();
    session(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full">
        <form onSubmit={submitHandler} className="px-10 py-10 mb-4">
          <div className="items-center justify-center ">
            <div class="grid grid-cols-4 gap-4  mb-5 ">
              <div class="col-span-3 ">
                <h3 className="p-4 mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                  Mark Attendance
                </h3>
              </div>
            </div>
            {list}
          </div>

          <button
            className="px-4 py-2 mt-5 mb-0 text-white bg-red-500 rounded hover:bg-orange-700"
            type="submit"
          >
            Submit Attandance
          </button>
        </form>
      </div>
    </div>
  );
};

export default SessionPopup;
