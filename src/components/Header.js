import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 text-white bg-blue-700">
      <div className="container flex items-center justify-between px-2 py-4 mx-auto">
        <h1 className="font-bold text-md sm:text-2xl md:text-3xl">
          Account Management System
        </h1>
        <div className="flex gap-2">
          <a href="#" className="overflow-ellipsis">
            email@email.com
          </a>
          <img
            src="https://cdn.mos.cms.futurecdn.net/FvLi2evhiuCYNdZ7HALQu3-1200-80.jpeg"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
