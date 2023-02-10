import AnnouncementForm from "@/components/Announcement/AnnouncementForm";
import Navigation from "@/components/layout/Navigation";
import Announcement from "@/components/Teacher/Announcement";
import React from "react";

const index = () => {
  return (
    <div className="h-screen bg-slate-100">
      <Navigation />
      <Announcement />
    </div>
  );
};

export default index;
