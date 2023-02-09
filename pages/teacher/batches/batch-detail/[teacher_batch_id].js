import React, { useEffect } from "react";
import { useRouter } from "next/router";
import BatchDetails from "@/components/batches/BatchDetails";
import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";
import Navigation from "@/components/layout/Navigation";
const TeacherBatchDetail = () => {
  const router = useRouter();
  const batchId = router.query.teacher_batch_id;

  return (
    <>
      <div>
        <Navigation />
        <div className="flex">
          <TeacherSidebar />
          <div className="h-screen flex-1 p-7 -mt-12">
            <div className="m-0">
              <BatchDetails batchId={batchId} type="teacher" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherBatchDetail;
