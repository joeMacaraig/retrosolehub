"use client";

import { NavbarOptions } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-3 shadow-lg">
      <Link
        className="text-3xl font-bold tracking-tight hover:text-dark-700"
        href="/"
      >
        RetroSoleHub
      </Link>
      <div className="flex items-center gap-4 font-medium">
        {NavbarOptions.map((item) => (
          <Link href={item.link}>{item.name}</Link>
        ))}
      </div>
    </nav>
  );
};
