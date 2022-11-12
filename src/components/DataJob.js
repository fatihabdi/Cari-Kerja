import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TableJob from "./TableJob";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const DataJob = () => {
  return (
    <>
      <div className="flex bg-gray-300">
        <Sidebar />
        <div className="lg:ml-[300px] ml-32 min-h-screen min-w-scress">
          <Header />
          <div className="w-[250px] lg:w-full pb-10">
            <div className="flex justify-between">
              <h1 className="mt-10 text-xl font-semibold lg:ml-9">
                List Pekerjaan
              </h1>
              <Link to="/list-job-vacancy/form">
                <button className="w-10 h-10 mt-10 text-white rounded shadow-md lg:w-28 bg-sky-500 lg:flex lg:items-center lg:justify-center">
                  <HiPlus className="inline-block lg:mr-2" />
                  <span className="hidden lg:block">Add Data</span>
                </button>
              </Link>
            </div>
            <TableJob />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataJob;
