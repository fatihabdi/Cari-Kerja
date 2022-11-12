import React, { createContext, useState } from "react";
import { Nav } from "flowbite-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://carikerja.work/asset/img/logo/carikerja.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </Link>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 CariKerja™ . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
