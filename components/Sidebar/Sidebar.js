import Link from "next/link";
import { useState } from "react";
import logo from "@/components/src/AMLogo.png";
import sidebarBgImg from "@/components/src/Frame73.png";
import { useContext } from "react";
import AuthContext from "@/components/store/auth-context";
import { useRouter } from "next/router";
import avatar from "@/components/src/ArabicMollemaMascot-01.png";

const Sidebar = (props) => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const logoutHandler = (e) => {
    console.log("LoggOut");
    authCtx.logout();
    router.replace("/");
  };
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: `${props.title1}`, src: `${props.src1}`, link: `${props.link1}` },
    { title: `${props.title2}`, src: `${props.src2}`, link: `${props.link2}` },
    { title: `${props.title3}`, src: `${props.src3}`, link: `${props.link3}` },
    { title: `${props.title4}`, src: `${props.src4}`, link: `${props.link4}` },
  ];
  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-black min-h-screen h-full  p-5  pt-8 relative duration-300`}
        style={{
          backgroundImage: `url(${sidebarBgImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "fixed",
          top: 0,
          position: " -webkit-sticky",
          // overflow: 'hidden'
        }}
      >
        <img
          src="https://static.thenounproject.com/png/1195182-200.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple  bg-white
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src={logo.src}
            className={`cursor-pointer duration-500 rounded-md ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-100 ${
              !open && "scale-0"
            }`}
          ></h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link href={Menu.link} >
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={Menu.src} className="w-8 border rounded-md" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        <ul className="mt-20">
          <li className="flex my-3 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9mt-2 bg-light-white">
            <button
              type="button"
              className="flex  text-sm bg-yellow-100 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={avatar.src}
                alt="user photo"
              />
            </button>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              My Profile
            </span>
          </li>
          <li  onClick={logoutHandler} className="flex my-3  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9mt-2 bg-light-white">
            <button
             
              className={` block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
            >
              <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8rXmrbwkvOlRL-sbIRH2WiY5rkThzKMx9g&usqp=CAU"
            className="w-8 h-8 rounded-full"
          />
            </button>
            <span className={`${!open && "hidden"}  origin-left duration-200`}>
              Log-Out
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
