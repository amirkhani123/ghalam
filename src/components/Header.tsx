"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#services", label: "خدمات قضایی" },
    { href: "/#net", label: "خدمات اینترنتی" },
    { href: "/print", label: "پشتیبانی" },
    { href: "/print", label: "پرینت" },
  ];

  return (
    <>
      <header
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-350 max-w-7xl
        flex items-center justify-between
        px-3 md:px-6
       h-16.25 md:h-20
        rounded-2xl
        font-zain font-bold text-sm md:text-base
        transition-all duration-500 ease-out
        ${
          scrolled
            ? "bg-sky-900/85 backdrop-blur-2xl shadow-2xl shadow-sky-900/40 ring-1 ring-white/10"
            : "bg-sky-800/70 backdrop-blur-xl shadow-lg shadow-sky-900/20 ring-1 ring-white/5"
        }
      `}
      >
        {/* درخشش تزئینی */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-10 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl" />
        </div>

        {/* منوی دسکتاپ */}
        <nav className="relative z-10 hidden md:block">
          <ul className="flex gap-4 lg:gap-10 items-center">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="group relative whitespace-nowrap text-white/90 hover:text-white transition-colors duration-300 py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-cyan-300 to-sky-400 rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* دکمه منوی موبایل */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="منو"
          className="relative z-10 md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* لوگو */}
        <Link
          href="/"
          className="relative z-10 flex items-center shrink-0 group text-white font-semibold text-2xl font-zain"
        >
          GHALAM{" "}
        </Link>
      </header>

      {/* منوی موبایل بازشو */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`absolute top-[85px] left-1/2 -translate-x-1/2 w-[95%] rounded-2xl bg-sky-900/95 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10 p-4 transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 font-zain font-bold text-white text-base">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
