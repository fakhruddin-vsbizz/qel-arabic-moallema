import { useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import Link from "next/link";

const ManageStudentTeacherData = (props) => {
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

  return (
    <div className="bg-slate-100 h-auto">
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div>
          <div class="flex items-center justify-center mb-3 ml-36">
            <label
              for="Toggle4"
              className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-300 dark:text-gray-800 rounded-sm"
            >
              <input id="Toggle4" type="checkbox" className="hidden peer" />
              <span className="px-4 py-2 dark:bg-gray-500 peer-checked:dark:bg-gray-300 rounded-sm">
                Varified {path}
              </span>
              <span className="px-4 py-2 dark:bg-gray-300 peer-checked:dark:bg-orange-400 rounded-sm">
                Un-Varified {path}
              </span>
            </label>
          </div>
        </div>

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
                        Name
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
                      <th
                        scope="col"
                        className="relative py-3 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.name}
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
