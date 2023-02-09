import AnnouncementForm from "@/components/Announcement/AnnouncementForm";
import Navigation from "@/components/layout/Navigation";
import React from "react";

const index = () => {
  return (
    <div className="h-screen bg-slate-300">
      <Navigation />
      <AnnouncementForm />
    </div>
  );
};

export default index;
