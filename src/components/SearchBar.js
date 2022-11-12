import React, { useContext, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { setData, filteredData, wordEntered } = state;
  const { handleFilter, clearInput } = handleFunction;

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="containerTable">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HiSearch className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari Pekerjaan..."
            value={wordEntered}
            onChange={handleFilter}
            required
          />
          <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {filteredData.length === 0 ? (
              "Search"
            ) : (
              <AiOutlineClose className="w-5 h-5" onClick={clearInput} />
            )}
          </button>
        </div>
        {filteredData.length !== 0 && (
          <div className="containerTable">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Link to={`/job-vacancy/${value.id}`}>
                  <p className="my-5 text-xl font-medium rounded">
                    {value.title}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
