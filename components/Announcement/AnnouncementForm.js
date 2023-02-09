import React from "react";

const   AnnouncementForm = () => {
  return (
    <>
      <div className="float-left ml-2 bg-white rounded-lg shadow-md  w-80 mt-28">
        <h2 class="text-lg font-medium mb-4">Make an Announcement</h2>
        <div className="20">
          <div className=" mb-96">Announcement 1</div>
        </div>
      </div>
      <form class="bg-white p-6 rounded-lg shadow-md mt-28 ml-96 pb-20">
        <h2 class="text-lg font-medium mb-4">Make an Announcement</h2>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="subject">
            Subject
          </label>
          <input
            class="w-full border border-gray-400 p-2 rounded-lg"
            type="text"
            id="subject"
            name="subject"
            placeholder="Batch 1 Launched"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="body">
            Body
          </label>
          <textarea
            class="w-full border border-gray-400 p-2 rounded-lg"
            id="body"
            name="body"
            rows="5"
            required
          ></textarea>
        </div>
        <button class=" bg-dark-purple text-white font-medium py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
};

export default AnnouncementForm;
