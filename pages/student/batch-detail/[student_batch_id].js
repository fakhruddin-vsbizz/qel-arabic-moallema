import React from "react";
import Navigation from "@/components/layout/Navigation";

import StudentSidebar from "@/components/Sidebar/StudentSidebar";
import { useRouter } from "next/router";
import BatchDetailStudent from "@/components/batches/BatchDetailStudent";

const index = () => {
  const router = useRouter();
  const batchId = router.query.student_batch_id;

  return (
    <div>
      <Navigation />
      <div className="flex">
        <StudentSidebar />
        <div className="h-screen flex-1 p-7 -mt-12">
          <div className="m-0">
            <BatchDetailStudent batchId={batchId} type="student" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
