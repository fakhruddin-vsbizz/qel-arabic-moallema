import React from 'react'

const CreateAnnouncement = () => {
  return (
    <>
 
        
        <div className="mt-5 md:col-span-2 md:mt-0">
          {/* <form onSubmit={onBatchCreateHandler}> */}
          <h2 className="px-4 py-5 mb-4 text-3xl font-medium leading-6 text-gray-800">
              Create Announcement
            </h2>
            <div className="overflow-hidden shadow sm:rounded-md md:mx-5">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6 ">
                  <div className="col-span-6">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-4">
                        <h3>Announcement</h3>
                        <label
                          htmlFor="batch-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="batch-name"
                          id="first-name"
                        //   ref={nameRef}
                        //   autoComplete="given-name"
                          required
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-4">
                      <label
                            htmlFor="Type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Select Batch
                          </label>

                          <select
                            // ref={teacherNameRef}
                            required
                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            {/* {options.map((option) => ( */}
                              <option 
                              // key={option.id} 
                              // value={option.email}
                              >
                              {/* {option.name} */}
                              --Select Batch--
                              </option>
                              <option>                              
                              All
                              </option>
                              <option>                              
                              Batch 1
                              </option>
                              <option>                              
                              Batch 2
                              </option>
                            {/* ))} */}
                          </select>
                      </div>
                      <div className="col-span-4">
                      <h1>Select User Group</h1>
                      <div className="grid grid-cols-3 gap-5 lg:gap-10">
                        {/* {days.map((day) => ( */}
                            
                          <div className="col-span-2 pb-3 pl-1 border-2 border-gray-300 rounded-md shadow-sm appearance-none cursor-pointer sm:col-span-1">
                            <input
                              type="radio"
                              value="all"
                              id='all'
                              name='user'
                              // onChange={handleChange}
                              // checked={selectedDays.includes(day)}
                              className="block mt-1 border-solid rounded-full appearance-none day-card focus:outline-none after:border-none focus:border-none sm:text-sm"
                            />
                            <label
                              htmlFor="all"
                              className="block text-sm font-medium text-center text-gray-700 cursor-pointer"
                            >
                              Both
                            </label>
                          </div>
                          <div className="col-span-2 pb-3 pl-1 border-2 border-gray-300 rounded-md shadow-sm appearance-none cursor-pointer sm:col-span-1">
                            <input
                              type="radio"
                              value="teacher"
                              id='teacher'
                              name='user'
                              // onChange={handleChange}
                              // checked={selectedDays.includes(day)}
                              className="block mt-1 border-solid rounded-full appearance-none day-card focus:outline-none after:border-none focus:border-none sm:text-sm"
                            />
                            <label
                              htmlFor="teacher"
                              className="block text-sm font-medium text-center text-gray-700 cursor-pointer"
                            >
                              teacher
                            </label>
                          </div>
                          <div className="col-span-2 pb-3 pl-1 border-2 border-gray-300 rounded-md shadow-sm appearance-none cursor-pointer sm:col-span-1">
                            <input
                              type="radio"
                              value="student"
                              id='student'
                              name='user'
                              // onChange={handleChange}
                              // checked={selectedDays.includes(day)}
                              className="block mt-1 border-solid rounded-full appearance-none day-card focus:outline-none after:border-none focus:border-none sm:text-sm"
                            />
                            <label
                              htmlFor="student"
                              className="block text-sm font-medium text-center text-gray-700 cursor-pointer"
                            >
                              student
                            </label>
                          </div>
                        {/* ))} */}
                      </div>
                      </div>
                      <div className="col-span-4">
                        <label
                          htmlFor="book-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Discription
                        </label>
                        <input
                          type="text"
                          name="book-name"
                          id="book-name"
                        //   ref={bookNameRef}
                          required
                        //   autoComplete="given-name"
                          className="block w-full h-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
              
              <div className="items-center px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Make Announcement
                </button>
              </div>
            </div>
          {/* </form> */}
        </div>
       
  </>
  )
}

export default CreateAnnouncement