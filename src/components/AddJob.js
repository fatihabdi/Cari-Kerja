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
                Form Tambah Ticket
              </h1>
            </div>

            <div className="block mt-10 lg:flex lg:ml-9">
              <div className="flex flex-col">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Nama Ticket
                </label>
                <input
                  type="text"
                  id="title"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Deskripsi Ticket
                </label>
                <textarea
                  type="text"
                  id="description"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="flex flex-col lg:ml-10">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Tanggal
                </label>
                <input
                  type="date"
                  id="tanggal"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Lokasi
                </label>
                <input
                  type="text"
                  id="lokasi"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Harga Ticket
                </label>
                <input
                  type="number"
                  id="harga"
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Foto Ticket
                </label>
                <input
                  type="text"
                  id="ticket_image_url"
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
