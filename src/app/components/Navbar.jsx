"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#02111B] text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end gap-8">
        <a
          href="#my-work"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          My Work
        </a>
        <a
          href="#coding-classes"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Coding Classes
        </a>
      </div>
    </nav>
  );
}
