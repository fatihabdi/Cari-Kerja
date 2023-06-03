import React from "react";
import Header from "./Header";
// import TotalInterview from "./Highlight/TotalInterview";
// import TotalLamar from "./Highlight/TotalLamar";
// import TotalPerusahaan from "./Highlight/TotalPerusahaan";
import Sidebar from "./Sidebar";
import TableJob from "./TableJob";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-300">
        <Sidebar />
        <div className="lg:ml-[300px] ml-32">
          <Header />

          {/* <div className="mt-10">
            <h1 className="text-xl font-semibold ml-7">Statistik Kamu</h1>
            <div className="mt-3 lg:flex lg:flex-row lg:justify-center lg:items-center">
              <TotalLamar />
              <TotalInterview />
              <TotalPerusahaan />
            </div>
          </div> */}
          <div className="w-[250px] lg:w-full pb-10">
            <h1 className="mt-10 text-xl font-semibold ml-7">
              Data Ticket mu
            </h1>
            <TableJob />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
