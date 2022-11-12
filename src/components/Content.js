import React from "react";
import Footer from "./Footer";
import JobCard from "./JobCard";
import Navbar from "./navbar";
import SearchBar from "./SearchBar";

const Content = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <JobCard />
      <Footer />
    </>
  );
};

export default Content;
