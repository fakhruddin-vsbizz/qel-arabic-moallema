import React from "react";

import ProgressCard from "../layout/ProgressCard";

const AllActivities = ({ batch }) => {
  return (
    <div className="min-h-screen text-center">
      <div className="grid grid-cols-4 gap-5 ">
        <div className="col-span-4">
          <ProgressCard title="Letters" view="View Details" />
        </div>
      </div>
    </div>
  );
};

export default AllActivities;
