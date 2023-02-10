import React from "react";

const DeleteConfirmation = ({ title, desc, deleteUser, close }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    deleteUser();
  };
  const closeHandler = (e) => {
    e.preventDefault();
    close();
  };
  return (
    <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <form onSubmit={submitHandler} className="px-10 py-10 mb-4">
          <p className=" mb-4"> {desc}</p>
          <button
            className=" bg-red-500 hover:bg-orange-700 text-white py-2 px-4 rounded"
            type="submit"
          >
            {title}
          </button>
          <button
            onClick={closeHandler}
            className="  bg-slate-400 ml-4 hover:bg-orange-700 text-white py-2 px-4 rounded"
            type="submit"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
