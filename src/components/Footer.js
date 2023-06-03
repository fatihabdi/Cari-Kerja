import React, { createContext, useState } from "react";
import { Nav } from "flowbite-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gray-400 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://tiketapasaja.com/images/logo-new.png?774ec158f1b1e862e3cd2a526ac928b2"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </Link>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2023 TiketApaSaja™ . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
