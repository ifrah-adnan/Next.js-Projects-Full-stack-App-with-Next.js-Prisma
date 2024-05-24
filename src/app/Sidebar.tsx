"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoLogoDribbble } from "react-icons/io";

const Sidebar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6  px-5 items-center border-b">
      <Link href="/">
        <IoLogoDribbble size={60} />
      </Link>
      <ul className=" flex space-x-6">
        {links.map((link, index) => (
          <li
            className="text-zinc-500 hover:text-zinc-800 font-bold "
            key={index}
          >
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-800": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-xl": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
