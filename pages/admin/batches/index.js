import Batches from "@/components/batches/Batches";
import Navigation from "@/components/layout/Navigation";
import React from "react";

const index = () => {
  return (
    <>
      <div className="">
        <Navigation />
        <div className="flex items-center justify-center mt-10">
          <Batches />
        </div>
      </div>
    </>
  );
};

export default index;
