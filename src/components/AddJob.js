import React, { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { GlobalContext } from "../context/GlobalContext";

const AddJob = () => {
  const { handleFunction } = useContext(GlobalContext);
  const { handleInput, handleSubmit } = handleFunction;
  return (
    <>
      <div className="flex bg-gray-300">
        <Sidebar />
        <div className="lg:ml-[300px] ml-32 min-h-screen min-w-scress">
          <Header />
          <div className="w-[250px] lg:w-full pb-10">
            <div className="">
              <h1 className="mt-10 text-xl font-semibold lg:ml-9">
                Form Tambah Pekerjaan
              </h1>
            </div>

            <div className="block mt-10 lg:flex lg:ml-9">
              <div className="flex flex-col">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  id="company_name"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Nama Pekerjaan
                </label>
                <input
                  type="text"
                  id="title"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Deskripsi Pekerjaan
                </label>
                <textarea
                  type="text"
                  id="job_description"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="flex flex-col lg:ml-10">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Kualifikasi
                </label>
                <textarea
                  type="text"
                  id="job_qualification"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Gaji Minimal
                </label>
                <input
                  type="number"
                  id="salary_min"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Gaji Maksimal
                </label>
                <input
                  type="number"
                  id="salary_max"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="flex flex-col lg:ml-10">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Lokasi
                </label>
                <input
                  type="text"
                  id="company_city"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Foto Perusahaan
                </label>
                <input
                  type="text"
                  id="company_image_url"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Type Pekerjaan
                </label>
                <input
                  type="text"
                  id="job_type"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Masa Jabatan
                </label>
                <input
                  type="text"
                  id="job_tenure"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Status Pekerjaan
                </label>
                <input
                  type="number"
                  id="job_status"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-[150px] h-[50px] mt-10 ml-10 bg-sky-500 rounded-lg text-white"
            >
              Tambah
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJob;
