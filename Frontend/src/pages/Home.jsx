import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="w-full h-full flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl">Affordable Medical</h1>
          <h2 className="text-7xl">Consultations</h2>
          <p className="m-4">Expert medical advice</p>
          <Link
            to="/about"
            className="border px-4 py-3 rounded-full border-teal-950"
          >
            Learn more
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
