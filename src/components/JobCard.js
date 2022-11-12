import React, { useState, useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";

const JobCard = () => {
  const [data, setData] = useState([]);
  const url = "https://dev-example.sanbercloud.com/api/job-vacancy";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.data);
      console.log(res.data);
    });
  }, []);
  return (
    <section className="p-5 bg-gray-200">
      <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold text-center">List Pekerjaan</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 containerTable">
        {data.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg"
              src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.job_description.substring(0, 100)}
              </p>
              <Link to={`/job-vacancy/${item.id}`}>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <HiOutlineArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCard;
