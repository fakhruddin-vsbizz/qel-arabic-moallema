import BatchDetails from "@/components/batches/BatchDetails";
import Navigation from "@/components/layout/Navigation";
import { useRouter } from "next/router";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import React from "react";
import grayBgImg from "@/components/src/grayBgImg.png";

const Index = () => {
  const router = useRouter();
  const batchId = router.query.batch_id;

  console.log(batchId);
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${grayBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
      }}
    >
      {/* <Navigation /> */}
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 items-center justify-center ">
          <BatchDetails batchId={batchId} type="admin" />
        </div>
      </div>
    </div>
  );
};

export default Index;
