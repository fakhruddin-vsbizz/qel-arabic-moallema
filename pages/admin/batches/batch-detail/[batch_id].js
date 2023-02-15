import BatchDetails from "@/components/batches/BatchDetails";
import Navigation from "@/components/layout/Navigation";
import { useRouter } from "next/router";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import React from "react";

const Index = () => {
  const router = useRouter();
  const batchId = router.query.batch_id;

  console.log(batchId);
  return (
    <div className="bg-slate-300 pb-20">
      <AdminSidebar />
      <BatchDetails batchId={batchId} type="admin" />
    </div>
  );
};

export default Index;
