import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { GlobalContext } from "../context/GlobalContext";

const EditForm = () => {
  const url = "https://dev-example.sanbercloud.com/api/job-vacancy";
  const { state, handleFunction } = useContext(GlobalContext);
  const { handleEdit, handleData } = handleFunction;
  const { data, setData } = state;

  // const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${url}/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);
  return (
    <>
      <div className="flex bg-gray-300">
        <Sidebar />
        <div className="lg:ml-[300px] ml-32 min-h-screen min-w-scress">
          <Header />
          <div className="w-[250px] lg:w-full pb-10">
            <div className="flex justify-between">
              <h1 className="mt-10 text-xl font-semibold lg:ml-9">
                Form Edit Pekerjaan {data.title}
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
                  value={data.company_name}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Nama Pekerjaan
                </label>
                <input
                  type="text"
                  id="title"
                  value={data.title}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Deskripsi Pekerjaan
                </label>
                <textarea
                  type="text"
                  id="job_description"
                  value={data.job_description}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Kualifikasi
                </label>
                <textarea
                  type="text"
                  id="job_qualification"
                  value={data.job_qualification}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Gaji Minimal
                </label>
                <input
                  type="text"
                  id="salary_min"
                  value={data.salary_min}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Gaji Maksimal
                </label>
                <input
                  type="text"
                  id="salary_max"
                  value={data.salary_max}
                  onChange={handleData}
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
                  value={data.company_city}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Foto Perusahaan
                </label>
                <input
                  type="text"
                  id="company_image_url"
                  value={data.company_image_url}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Type Pekerjaan
                </label>
                <input
                  type="text"
                  id="job_type"
                  value={data.job_type}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Masa Jabatan
                </label>
                <input
                  type="text"
                  id="job_tenure"
                  value={data.job_tenure}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />

                <label className="py-2 text-sm font-semibold text-gray-600">
                  Status Pekerjaan
                </label>
                <input
                  type="number"
                  id="job_status"
                  value={data.job_status}
                  onChange={handleData}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
            <button
              onClick={handleEdit}
              value={data.id}
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
