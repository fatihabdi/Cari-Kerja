import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { GlobalContext } from "../context/GlobalContext";

const ChangePassword = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { password, errorMsg } = state;
  const { handleChangePassword, handlePassword } = handleFunction;
  return (
    <>
      <div className="flex bg-gray-300">
        <Sidebar />
        <div className="lg:ml-[300px] ml-32 min-h-screen min-w-scress">
          <Header />
          <div className="w-[250px] lg:w-full pb-10">
            <div className="flex justify-between">
              <h1 className="mt-10 text-xl font-semibold lg:ml-9">
                Form Ganti Password
              </h1>
            </div>
            <div className="mt-10 lg:ml-9">
              <form onSubmit={handleChangePassword}>
                <div className="flex flex-col">
                  <label className="mt-5 mb-2">Password Lama</label>
                  <input
                    type="password"
                    id="current_password"
                    value={password.current_password}
                    onChange={handlePassword}
                    required
                    className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  />
                  <label className="mt-5 mb-2">Password Baru</label>
                  <input
                    type="password"
                    id="new_password"
                    value={password.new_password}
                    onChange={handlePassword}
                    required
                    className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  />
                  <p className="mt-2 text-sm text-red-500">
                    {password.new_password.length <= 8 ? errorMsg : ""}
                  </p>
                  <label className="mt-5 mb-2">Konfirmasi Password Baru</label>
                  <input
                    type="password"
                    id="password_confirmation"
                    value={password.password_confirmation}
                    onChange={handlePassword}
                    required
                    className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  />
                  <p className="mt-2 text-sm text-red-500">
                    {password.password_confirmation.length <= 8 ? errorMsg : ""}
                  </p>
                  <button
                    type="submit"
                    className="px-3 py-2 mt-5 text-white rounded-lg bg-sky-500"
                  >
                    Simpan
                  </button>

                  <Link to="/dashboard/profile">
                    <button className="px-3 py-2 mt-5 text-white bg-gray-500 rounded-lg">
                      Batal
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
