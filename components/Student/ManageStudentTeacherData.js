import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import Link from "next/link";

const ManageStudentTeacherData = (props) => {
  const [requestedStudent, setRequestedStudent] = useState([]);

  const router = useRouter();
  const path =
    router.pathname === "/admin/students/add-student" ? "students" : "teachers";
  console.log(path);

  const authCtx = useContext(AuthContext);
  let people =
    path === "students" ? authCtx.studentsList : authCtx.teachersList;

  useEffect(() => {
    supabase
      .from(`${path}`)
      .select("*")
      .then((response) =>
        path === "students"
          ? authCtx.setStudentsData(response.data)
          : authCtx.setTeachersData(response.data)
      );
  }, []);

  useEffect(() => {
    supabase
      .from("student_teacher_verification")
      .select("*")
      .eq("type", path)
      .then((response) => setRequestedStudent(response.data));
  }, []);

  return (
    <div className="bg-slate-100 h-auto">
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="mt-8 flex flex-col items-center">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white mt-8">
                <table className="min-w-full divide-y w-44 divide-gray-300 mr-96">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Contact
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.contact}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.type}
                        </td>

                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            href={`${person.email}/${path}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            View Profile
                          </Link>
                        </td>

                        <p></p>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {people == null && <p>No User Added</p>}
    </div>
  );
};

export default ManageStudentTeacherData;
