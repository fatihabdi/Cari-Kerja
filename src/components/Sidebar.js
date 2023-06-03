import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineChartSquareBar, HiPlus } from "react-icons/hi";
import { IoListOutline } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="min-h-screen fixed left-0 bg-gray-400 w-20 lg:w-[290px]">
        <Link to="/dashboard">
          <div className="flex items-center justify-center mt-[50px]">
            <img
              src="https://tiketapasaja.com/images/logo-new.png?774ec158f1b1e862e3cd2a526ac928b2"
              alt="logo"
              className="w-52"
            />
          </div>
        </Link>
        <div className="w-16 lg:w-[250px] mx-auto mt-14 border-b border-[#BBBBBB]">
          <Link
            to="/dashboard"
            className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-sky-500 hover:text-white active:bg-Primary-NormalActive ${
              location.pathname === "/dashboard" && "bg-sky-500 text-white"
            }`}
          >
            <HiOutlineChartSquareBar className="w-6 h-6 lg:ml-3 lg:mr-2" />
            <span className="hidden text-base lg:block">Dashboard</span>
          </Link>
        </div>
        <div className="hidden mt-5 ml-6 font-semibold text-Info-NormalHover lg:block">
          Data
        </div>
        <div className="w-16 lg:w-[250px] mx-auto mt-5 lg:mt-1">
          <Link
            to="/dashboard/list-ticket"
            className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-sky-500 hover:text-white active:bg-Primary-NormalActive ${
              location.pathname === "/dashboard/list-ticket" &&
              "bg-sky-500 text-white"
            }`}
          >
            <IoListOutline className="w-6 h-6 lg:ml-3 lg:mr-2" />
            <span className="hidden text-base lg:block">List Ticket</span>
          </Link>
        </div>
        <div className="w-16 lg:w-[250px] mx-auto mt-5 lg:mt-1">
          <Link
            to="/dashboard/list-ticket/create"
            className={`flex flex-row items-center justify-center h-10 mb-5 font-medium rounded lg:justify-start text-Info-Normal hover:bg-sky-500 hover:text-white active:bg-Primary-NormalActive ${
              location.pathname === "/dashboard/list-ticket/create" &&
              "bg-sky-500 text-white"
            }`}
          >
            <HiPlus className="w-6 h-6 lg:ml-3 lg:mr-2" />
            <span className="hidden text-base lg:block">Add Ticket</span>
          </Link>
        </div>
        <div className="w-16 lg:w-[260px] mx-auto default:mt-[380px] xl:mt-[250px] border-t border-[#BBBBBB]">
          <Link to="/dashboard/profile">
            <div className="mt-6">
              <img
                src={userObj.image_url}
                alt="avatar"
                border="0"
                className="float-left w-10 h-10 ml-3 mr-3 rounded-full"
              />
              <p className="hidden text-sm font-medium lg:block">
                {userObj.name}
              </p>
              <p className="hidden text-sm font-medium text-Info-Normal lg:block">
                {userObj.email}
              </p>
            </div>
          </Link>
          <Link to="/">
            <button
              onClick={handleLogout}
              className="w-16 h-8 mt-8 font-medium text-white bg-red-500 rounded"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
