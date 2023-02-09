import BatchDetails from "@/components/batches/BatchDetails";
import Navigation from "@/components/layout/Navigation";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const batchId = router.query.batch_id;

  console.log(batchId);
  return (
    <div className="bg-slate-300 pb-20">
      <Navigation />
      <BatchDetails batchId={batchId} />
    </div>
  );
};

export default Index;
