import React, { useState, useEffect, useContext } from "react";

import ShowAnnouncemetCard from "../layout/ShowAnnouncemetCard";
import supabase from "@/supabaseClient";
import AuthContext from "../store/auth-context";

const ShowAnnouncement = (props) => {
  const apiKey =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTlkMzJjYTFlZGVlZmIyMmUzZGNmYWYxNjUwNDdmMGQzYTViNTdlMThhZDFlOGIwN2FiMGVlYzdmNTc0ZDVjY2FjYmQ4NzI1ZTIwZTE1MmEiLCJpYXQiOjE2NzYyODQ2OTMuNzA1OTE3LCJuYmYiOjE2NzYyODQ2OTMuNzA1OTE4LCJleHAiOjQ4MzE5NTgyOTMuNzAwMzYsInN1YiI6IjM1MTA3NCIsInNjb3BlcyI6W119.fOFl0kYuzm4yF2pco2MmJ604FjJm6pfiPtw07o-WmmRuk130QnLqAJptoDsQphkSlK37UmQB6olejt9ePICQ52rvnCOcbLuu-uxL--h1ow5yuZDJ1AnSIPxYGZL74cxrUudd1Pgku5VbtJhsvlLQEhRQp18eY7xQAisBeM49WLQTczUfAh0B7ztIqxGQ-jOpPCK8xTiGz4RI9p9b9T68cYza0NZQ1b6OsNks8Jv-H5KkBYckfvDZLgGMCgOAjE1kOdHOhB-mdX6an3XUHImfX2Ea4dAfUpy5DzlZb_Re1f8tbIj_9P1UhxMfHCX11ZKLUaO_-JvMxUFk41zOWfJoeqe6Lx71g9YeP5aBkxLosWtHo-gB651yE27Chsv553__0fAFjB2YKfCAEGyIfxa8y9gzztHOyAyHk2SAxKUrif7X74cD7jnHkzFOdWvDDtLCTOLIv8E7ZqktmkuditrbkfL66qOUS46SHZSdneBgxnfW7ycxujP1gXcfnJETKopvYx-VFVxKxlOUnB54D7ZRmYprrs7jiGpoC-WrNVaNRqeR9Rbgr0Ypqn36kc5XC4Kw-VPAoazTWZ--UHiJvTGl4xx7BFpNPeXkedUPZNhwhiDOCtHWFNkQEf7rq31MNsXCmKVArRR9jelneyIm7XTUBh3Lkau4vd_G0rzubNzM9jE";

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
