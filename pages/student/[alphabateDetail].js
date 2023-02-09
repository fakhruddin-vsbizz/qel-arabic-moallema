import ActivityDetail from "@/components/Activity/ActivityDetail";
import LetterDetails from "@/components/layout/LetterDetails";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  const id = router.query.alphabateDetail;

  console.log(id);
  return <>{id && <ActivityDetail id={id} />}</>;
};

export default index;
