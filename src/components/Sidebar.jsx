import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { StateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useContext(StateContext);

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-teal-500 text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 text-md";

  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10 bg-white">
      <div>
        {activeMenu && (
          <>
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex gap-3 items-center ml-3 text-xl mt-4 font-extrabold tracking-tight dark:text-white text-slate-900"
                onClick={handleCloseSidebar}
              >
                <SiShopware />
                <span>Shoppy</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                className="text-xl mt-4 p-3 rounded-full hover:bg-light-gray block md:hidden"
              >
                <MdOutlineCancel className="cursor-pointer" />
              </button>
            </div>
            <div className="mt-10">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      key={link.name}
                      to={`${link.name}`}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      onClick={handleCloseSidebar}
                    >
                      {link.icon}
                      <span className="capitalize text-[16px]">
                        {link.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
