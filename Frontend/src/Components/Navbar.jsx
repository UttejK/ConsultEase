import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="w-full bg-slate-800 flex flex-wrap items-center justify-between h-16 mx-auto px-6">
        <div className="font-bold flex items-center flex-shrink-0 text-white mr-6">
          E-Clinic
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
