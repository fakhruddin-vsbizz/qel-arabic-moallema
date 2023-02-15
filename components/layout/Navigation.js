import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";
import logo from "@/components/src/AMLogo.png";
import avatar from "@/components/src/ArabicMollemaMascot-01.png";

function Navigation() {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const logoutHandler = (e) => {
    console.log("LoggOut");
    authCtx.logout();
    router.replace("/");
  };
  return (
    <nav
      class=" border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900"
      style={{ background: "white" }}
    >
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        {/* <Link href="/admin" class="flex items-center">
          <img
            src={logo.src}
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            
          </span>
        </Link> */}
        <div class="flex fl md:order-2 gap-5">
          <button
            onClick={logoutHandler}
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Log-Out
          </button>{" "}
          <button
            type="button"
            class="flex mx-3 text-sm bg-yellow-100 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src={avatar.src}
              alt="user photo"
            />
          </button>
        </div>

        {/* <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-2xl"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col p-4 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                class="block py-2 pl-3 pr-4  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/admin/batches"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Batches
              </Link>
            </li>
            <li>
              <Link
                href="/student"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                href="/teacher/batches"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Teachers
              </Link>
            </li>
           
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Navigation;
