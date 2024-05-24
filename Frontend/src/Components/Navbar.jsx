import React from "react";
import { Link, NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive, isPending, isTransitioning }) => {
  let classNames =
    "hover:bg-blue-200 text-teal-900 p-2 rounded-xl transition-all"; // Default class

  if (isActive) {
    classNames =
      "text-indigo-800 font-bold underline hover:bg-blue-200 p-2 rounded-xl transition-all";
  } else if (isPending) {
    classNames =
      "text-teal-700 hover:bg-blue-200 p-2 rounded-xl transition-all";
  } else if (isTransitioning) {
    classNames =
      "text-teal-600 hover:bg-blue-200 p-2 rounded-xl transition-all";
  }

  return classNames;
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full bg-blue-50">
      <nav className="border border-slate-300 shadow-xl shadow-stone-300 w-5/6 bg-sky-100 flex flex-wrap items-center justify-between h-16 mx-auto px-12 rounded-lg text-lg">
        <Link className="font-bold flex text-indigo-800 flex-shrink-0" to="/">
          E Clinic
        </Link>
        <ul className="flex gap-8 text-slate-200 flex-shrink-0">
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
