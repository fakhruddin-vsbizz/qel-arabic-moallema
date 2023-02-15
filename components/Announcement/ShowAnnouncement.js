import React, { useState, useEffect, useContext } from "react";

import ShowAnnouncemetCard from "../layout/ShowAnnouncemetCard";
import supabase from "@/supabaseClient";
import AuthContext from "../store/auth-context";

const ShowAnnouncement = (props) => {
  const [announcementList, setAnnouncementList] = useState([]);
  let filteredAnnouncementList;

  const authCtx = useContext(AuthContext);
  const type = authCtx.userType;

  useEffect(() => {
    supabase
      .from("announcement")
      .select("*")
      .then((response) => setAnnouncementList(response.data));
  }, [props.clicked]);

  console.log(announcementList);

  if (announcementList) {
    if (type === "admin") {
      filteredAnnouncementList = announcementList;
    } else if (type === "instructor") {
      filteredAnnouncementList = announcementList.filter(
        (anno) => anno.group === 1 || anno.group == 0
      );
    } else if (type === "student") {
      console.log(announcementList);
      filteredAnnouncementList = announcementList.filter(
        (anno) => anno.group === 2 || anno.group === 0
      );
    }
    console.log("list: ", filteredAnnouncementList);
  }

  console.log(filteredAnnouncementList);

  return (
    <>
      {/* <div className="mt-10 sm:mt-20 bg-gray-50"> */}
      <div className="items-center justify-center p-4 overflow-auto h-96 snap-y">
        <h2 className="px-4 py-5 mb-4 text-3xl font-medium leading-6 text-gray-800">
          Announcement
        </h2>
        {/* <p className="mt-1 text-gray-600 text-sms">
              Announcement Card
            </p> */}
        {filteredAnnouncementList.map((announcement) => (
          <ShowAnnouncemetCard
            title={announcement.title}
            msg={announcement.description}
            postDate="12/02/2023"
          />
        ))}
      </div>
      {/* </div> */}
    </>
  );
};

export default ShowAnnouncement;
