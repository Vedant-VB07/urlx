"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      px-6 py-4 flex justify-between items-center
      bg-slate-900 border-b border-cyan-500/20 shadow-md"
    >
      
      {/* Logo */}
      <Link href="/" className="text-xl font-bold tracking-wide">
        <span className="text-cyan-400">url</span>
        <span className="text-white">X</span>
      </Link>

      {/* Menu */}
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link
            href="/"
            className={`transition ${
              pathname === "/"
                ? "text-cyan-400"
                : "text-slate-200 hover:text-cyan-400"
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/shorten"
            className={`transition ${
              pathname === "/shorten"
                ? "text-cyan-400"
                : "text-slate-200 hover:text-cyan-400"
            }`}
          >
            Generate
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
