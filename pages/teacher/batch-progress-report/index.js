import Navigation from "@/components/layout/Navigation";
import ProgressCard from "@/components/Activity/ProgressCard";
import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";
import GeneralCard from "@/components/layout/GeneralCard";
import React from "react";
import grayBgImg from "@/components/src/grayBgImg.png"

const BatchProgressReport = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="flex" style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
        <TeacherSidebar />
        <div className="flex-1 min-h-screen h-full p-10 mx-5">
          {/* {Menus.map((Menu, index) => ( */}
          <div className="grid grid-cols-3 gap-5 p-3 m-0 rounded-md shadow-md md:p-5 md:grid-cols-5">
            <div className="col-span-2 ">
              <label
                htmlFor="Teacher"
                className="m-auto text-2xl font-medium text-center text-gray-700 blockmt-2 text-large"
              >
                Select Batch
              </label>
              
            </div>
            <div className="col-span-3 ">
              
              <select
                id="Teacher"
                name="Teacher"
                // ref={typeRef}
                autoComplete="teacher-name"
                required
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Batch 1</option>
                <option>Batch 2</option>
                <option>Batch 3</option>
                <option>Batch 4</option>
                <option selected>--Select Batch--</option>
              </select>
            </div>
          </div>
          <div className="">
          <ProgressCard/>
          </div>
          <div className="mt-5">            
          <h1 className="text-lg font-semibold text-green-500">Completed chapters</h1>
          </div>
          <div className="grid grid-cols-2 gap-5 p-3 m-0 md:p-5 md:grid-cols-4">
            <div className="col-span-1"><GeneralCard title="Chapter 1" disc="acvscdsv" btnText="view" link="batch-progress-report/chapter-id"  /></div>
            <div className="col-span-1"><GeneralCard title="Chapter 2" disc="acvscdsv" btnText="view" link="batch-progress-report/chapter-id"  /></div>
            <div className="col-span-1"><GeneralCard title="chapter 3" disc="acvscdsv" btnText="view" link=""  /></div>
          </div>
          <div className="mt-5">                
          <h1 className="text-lg font-semibold text-red-500">Incoming chapters</h1>
          </div>
          <div className="grid grid-cols-2 gap-5 p-3 m-0 md:p-5 md:grid-cols-4">
            <div className="col-span-1"><GeneralCard title="chapter 4" disc="acvscdsv" btnText="view" link=""  /></div>
            <div className="col-span-1"><GeneralCard title="chapter 5" disc="acvscdsv" btnText="view" link=""  /></div>
            <div className="col-span-1"><GeneralCard title="chapter 6" disc="acvscdsv" btnText="view" link=""  /></div>
            <div className="col-span-1"><GeneralCard title="chapter 7" disc="acvscdsv" btnText="view" link=""  /></div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default BatchProgressReport;
