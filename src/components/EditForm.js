import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { GlobalContext } from "../context/GlobalContext";

const EditForm = () => {
  const url = process.env.REACT_APP_API_URL + "/concerts";
  const { state, handleFunction } = useContext(GlobalContext);
  const { handleEdit, handleInput } = handleFunction;
  const { input, setInput } = state;

  // const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${url}/${id}`).then((res) => {
      setInput(res.data.data);
    });
  }, []);

  console.log(input);
  return (
    <>
      <div className="flex bg-gray-300">
        <Sidebar />
        <div className="lg:ml-[300px] ml-32 min-h-screen min-w-scress">
          <Header />
          <div className="w-[250px] lg:w-full pb-10">
            <div className="flex justify-between">
              <h1 className="mt-10 text-xl font-semibold lg:ml-9">
                Form Edit Ticket {input.name}
              </h1>
            </div>
            <div className="block mt-10 lg:flex lg:ml-9">
              <div className="flex flex-col">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Nama Ticket
                </label>
                <input
                  type="text"
                  id="name"
                  value={input.name}
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Tipe Ticket
                </label>
                <input
                  type="text"
                  id="type"
                  value={input.type}
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="flex flex-col lg:ml-10">
                <label className="py-2 text-sm font-semibold text-gray-600">
                  Tanggal Mulai
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={input.startDate}
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Tanggal Selesai
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={input.endDate}
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Harga Ticket
                </label>
                <input
                  type="number"
                  id="price"
                  value={input.price}
                  onChange={handleInput}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
                {/* <input
                  type="number"
                  id="serial_number"
                  value={input.serial_number}
                  onChange={handleInput}
                  className="hidden px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                /> */}
              </div>
            </div>
            <button
              onClick={handleEdit}
              value={input.id}
              className="w-32 h-10 mt-10 ml-10 text-white rounded-lg bg-sky-500"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditForm;
