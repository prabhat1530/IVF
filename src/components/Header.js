import React, { useState } from "react";
import { Link } from "react-router-dom";

export function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <header className="fixed top-0 w-full bg-white text-red-500 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">IVF</span>
            <span className="text-xl text-white">Pulse</span>
          </div>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav
          className={`lg:flex items-center space-x-6 lg:space-x-8 ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <a
            href="#women"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Women's Health
          </a>
          <a
            href="#fp"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Fertility Preservation
          </a>
          <a
            href="#advanced"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Advanced Treatments
          </a>
          <a
            href="#infertility"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Infertility Treatments
          </a>
          <a
            href="#ivf"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            IVF Testing
          </a>
          <a
            href="#/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            About Us
          </a>
          <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded text-sm">
            Talk to Us
          </button>
        </nav>
      </div>

      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <nav className="space-y-4 bg-slate-800 text-red-500 p-4">
          <a
            href="#women"
            className="block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Women's Health
          </a>
          <a
            href="#fp"
            className="block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Fertility Preservation
          </a>
          <a
            href="#advanced"
            className="block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Advanced Treatments
          </a>
          <a
            href="#infertility"
            className="block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Infertility Treatments
          </a>
          <a
            href="#ivf"
            className="block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            IVF Testing
          </a>
          <a
            href="#/about"
            className="block text-sm font-medium text-muted-foreground hover:text-primary"
          >
            About Us
          </a>
          <button className="w-full px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded text-sm">
            Talk to Us
          </button>
        </nav>
      </div>
    </header>
  );
}
