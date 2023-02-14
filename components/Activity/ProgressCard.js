import React from "react";

const ProgressCard = () => {
  return (
    <div className="p-3 my-5 rounded-md shadow-md bg-slate-50 md:p-5">
      
      <div className="grid grid-cols-3 gap-5 p-3 m-0 md:p-5 md:grid-cols-5">
            <div className="col-span-2 mt-2">
              <h1 className="text-3xl">Batch 1</h1>
              
            </div>
            <div className="col-span-3 ">
              
            <div class="mb-1 text-lg font-medium ">Chapter completed: 3 of 7</div>
      <div class="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="h-4 bg-gray-900 rounded-full dark:bg-green-500"
          style={{ width: " 45%" }}
        ></div>
      </div>
            </div>
          </div>
      
      
    </div>
  );
};

export default ProgressCard;
