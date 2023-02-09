import React from "react";
import Card from "../layout/Card";
import GeneralCard from "../layout/GeneralCard";
import HomeActivityCard from "../layout/HomeActivityCard";
import ProgressCard from "../layout/ProgressCard";

const AllActivities = () => {
  return (
    <div className="min-h-screen text-center">
        <h1 className="text-3xl">Batches</h1>
    <div className="grid grid-cols-4 gap-5">        
      <div className="col-span-auto">
      <GeneralCard name= "Batch 1" title="" letter="" btnText="View" link="/" />
      </div>
      <div className="col-span-auto">
        <GeneralCard name= "Batch 2" title="" letter="" btnText="View" link="/" />
      </div>
    </div>
    <div className="grid grid-cols-4 gap-5">
        
      <div className="col-span-4">        
        <ProgressCard title="Letters" view="View Details" />
        <ProgressCard title="Sentances" view="View Details" />
      </div>
    </div>
    </div>
  );
};

export default AllActivities;
