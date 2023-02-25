import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button className="btn btn-success p-2 m-2">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          {" "}
          Home
        </Link>{" "}
      </button>
    </div>
  );
};

export default Home;
