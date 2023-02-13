import React, { useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import supabase from "@/supabaseClient";
import Link from "next/link";
const StudentListBatch = () => {
  const authCtx = useContext(AuthContext);
  let people = authCtx.studentsList;

  useEffect(() => {
    supabase
      .from(`students`)
      .select("*")
      .then((response) => authCtx.setStudentsData(response.data));
  }, []);
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block w-5/6 min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden bg-white shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4 pr-3 text-xs font-medium tracking-wide text-left text-gray-500 uppercase sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs font-medium tracking-wide text-left text-gray-500 uppercase"
                  >
                    Contact
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-xs font-medium tracking-wide text-left text-gray-500 uppercase"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                      {person.name}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.contact}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.type}
                    </td>
                    <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                      <Link
                        href={`${person.email}}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View Profile
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentListBatch;
