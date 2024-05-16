import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-10 w-full  text-center">
      <h1 className="lg:text-6xl text-4xl md:text-6xl font-bold relative z-50 text-zinc-500 pt-10">
        Expense <Link to={"/"}>GQL</Link>
      </h1>
    </div>
  );
};

export default Header;
