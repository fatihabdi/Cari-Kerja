import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./Footer";

const DetailJob = () => {
  const url = process.env.REACT_APP_API_URL + "/concerts";

  const [data, setData] = useState([]);
  // const [jobQual, setJobQual] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${url}/${id}`).then((res) => {
      setData(res.data.data);
      // setJobQual(res.data.job_qualification);
    });
  }, []);

  console.log(data);
  return (
    <>
      <Navbar />
      <section>
        <nav
          className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  {data.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="container">
          <div className="pl-20 containerTable">
            <img
              src={data.company_image_url}
              alt={data.title}
              className="w-[120px]"
            />
            <h1 className="mt-10 text-2xl font-semibold">{data.name}</h1>
            <h1 className="mt-10 text-xl font-semibold">Type Ticket :</h1>
            <p className="mt-2 text-justify uppercase">{data.type}</p>
            <h1 className="mt-3 font-semibold text-md">Price :</h1>
            <p className="mt-2">
              Rp. {data.price}
            </p>
            <h1 className="mt-3 font-semibold text-md">Date :</h1>
            <p className="mt-2">
              {data.startDate} - {data.startDate}
            </p>
            <Link to={`/pembayaran/${data.id}`}>
              <button className="h-10 mt-5 font-semibold text-white bg-blue-500 rounded w-28">
                Book
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailJob;
