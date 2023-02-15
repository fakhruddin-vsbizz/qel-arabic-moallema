import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import SuccessPrompt from "@/components/layout/SuccessPrompt";

const index = ({ paths }) => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const id = router.query.userid;

  console.log(router.query.userid);
  return (
    <div>
      <SuccessPrompt
        setSubmitted={setSubmitted}
        title={"Invite Sent Successfully"}
        paths="/"
      />
    </div>
  );
};

export async function getStaticPaths() {
  // Generate the paths for the dynamic routes
  // ...
  let list;

  const { data, err } = await supabase
    .from("student_teacher_verification")
    .select("*")
    .then((res) => (list = res.data));

  let list2;
  if (list) {
    list2 = list;
  }
  return {
    paths: list2.map((meetup) => ({
      params: { userid: meetup.email.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("id: ", params.userid);

  const email = params.userid;

  let groupId = "80086765988218600";
  const options = {
    method: "POST",
    url: "https://api.mailerlite.com/api/v2/groups/group_name/subscribers",
    headers: {
      accept: "application/json",
      "X-MailerLite-ApiDocs": "true",
      "content-type": "application/json",
      "X-MailerLite-ApiKey":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZjVhMzRhNGYyMzE1N2RmZGZiMjg3ZWNiY2U5OTY1ZjgxNTlhMDJhMTQyOGUwODVmYzE5OWNhNThmMTI2ZGFlODAyNTNhYWVmYjgzMzg1ZWIiLCJpYXQiOjE2NzYyNjkwNzMuNjAyNjQxLCJuYmYiOjE2NzYyNjkwNzMuNjAyNjQyLCJleHAiOjQ4MzE5NDI2NzMuNTk4MDE3LCJzdWIiOiIzNTEwNzQiLCJzY29wZXMiOltdfQ.TaPlkb_KNka-53ofBJ950BknTl2SoVnZ-HYCFvdQrJEOu578MzqGGZK6ERoWAwSgmbapWdqT5tFT1TDHsFJw34Pdbbl6fHKaJMugywReD0OxISHfukP04agt8tW7BxY-HzeyNJVc-6YXnz9XlMReWpKKEDfQ_x7TDwS5Kxf9DdcWQXkDZxIcGoksLqun9YXUSEXSM4kGSnQaVOalceEtd964EQxF6ZsixpOTLOmd6SYhKiQ1mZVdc6_0VH1Gbtp9-P9WZD0H_Rzft5uC4yHNdwoCXmWjXQRS0mcwlvMdb18gVyFh0C4X1jyoGHtMDQtyCZlQuENQq5uAj9Xcv59yKwMAcxq5PQn8kfyva48Eksm1wUJv2r1bTR9tax7MWZ_UbWO5VAEEugryz3wPb6KwCqUQ_nkLMZ6fVxanJCYTYzWdUcrMhJEzw8NeH2dw0UahC9vTdx8-y1d77mv_xInMhp08i8VN5JZ5s4A_7RbhCp-kZYpV3WtpidLEk3jivkFNzAci-HdsDK3qVwIv7mv9QuvrY6OGSKAZC0Yq49lVHjBz2jNOLHMm3ksy6gdBL6CG7zZy_yz-8QkQUYbpXYZiCF9Ki4JOhB0-KZ8jFMTA96tvpudnD7jOXL7Aavc2uJZARqth8j49c8h79Ek-JRIUYbKidaIN1P8EBTv7BuSD6DI",
    },
    data: {
      email: email,
      resubscribe: false,
      autoresponders: true,
      type: "active",
      group_name: "groupTeacher",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
    })
    .catch(function (error) {
      // console.error(error);
    });

  return {
    props: {
      paths: "admin/",
    },
  };
}

export default index;
