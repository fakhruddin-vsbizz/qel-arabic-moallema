import Batches from "@/components/batches/Batches";
import Navigation from "@/components/layout/Navigation";
import React from "react";

const index = () => {
  return (
    <>
      <div className="">
        <Navigation />
        <div className="mt-10 flex justify-center items-center">
          <Batches />
        </div>
      </div>
    </>
  );
};

export default index;
