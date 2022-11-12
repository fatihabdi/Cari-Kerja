import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Profile = () => {
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  return (
    <>
      <div className="flex bg-gray-300">
        <Sidebar />
        <div className="lg:ml-[300px] ml-32 min-h-screen min-w-scress">
          <Header />
          <div className="w-[250px] lg:w-full pb-10">
            <div className="flex justify-between">
              <h1 className="mt-10 text-xl font-semibold lg:ml-9">
                Profil Akun Anda
              </h1>
            </div>
            <div className="mt-10 bg-white rounded-md lg:containerTable flex flex-col items-center lg:px-10 shadow-md w-[200px] lg:w-[1100px]">
              <img
                src={userObj.image_url}
                alt="avatar"
                className="rounded-full w-14 h-14 mt-14 lg:w-52 lg:h-52"
              />
              <div className="flex flex-col lg:flex-row justify-between lg:px-24 w-[170px] lg:w-[1100px]">
                <div className="flex flex-col mt-5 lg:pb-10 lg:mt-10">
                  <h1 className="mt-5 text-xs font-semibold lg:text-2xl">
                    Nama
                  </h1>
                  <div className="flex items-center h-6 px-3 mt-3 text-xs font-medium bg-white border rounded lg:text-xl lg:h-10 lg:w-80">
                    {userObj.name}
                  </div>
                  <h1 className="mt-5 text-xs font-semibold lg:text-2xl">
                    Email
                  </h1>
                  <div className="flex items-center px-3 mt-3 text-xs font-medium bg-white border rounded h-7 lg:text-xl lg:h-10 lg:w-80">
                    {userObj.email}
                  </div>
                </div>
                <div className="flex flex-col pb-10 lg:mt-10">
                  <Link to="/dashboard/change-password">
                    <button className="w-32 mt-10 text-xs font-medium text-white rounded shadow h-7 lg:h-10 lg:text-base lg:w-52 bg-sky-500">
                      Change Password
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
