import React from "react";

const Header = () => {
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);

  return (
    <div className="mt-10 font-semibold lg:ml-8 text-md lg:text-2xl">
      Selamat Datang <br /> {userObj.name} !
    </div>
  );
};

export default Header;
