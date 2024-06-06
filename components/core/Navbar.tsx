"use client";

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";


import ProfileImage from "../../public/images/ProfileImage.png";

import Image from "next/image";

import Link from "next/link";

import HeadLogo from "../../public/images/TestLogo.svg";

import { Route, routes } from "@/utils/routes";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";

const Navbar = () => {
  const pathname = usePathname();


  const slideBar = "transform translate-x64 md:translate-x72 bg-red-500";

  return (
    <div
      className={`flex sticky w-full items-center justify-between p-2 md:px-6 bg-white shadow-sm transition-transform duration-1000 ease-in-out rounded-[70px]`}
    >
      <div className="bg-red-600">
        <Link
          href="/"
          className="items-center gap-3 py-2 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
        >
          <Image src={HeadLogo} width={211} height={48} alt="Logo" />
        </Link>
      </div>

      <div className="pb10 mt20 flex">
        {routes.map((route: Route) => {
          const activePage = pathname === route.href;
          return (
            <Link
              key={route.name}
              href={route.href}
              className={`flex items-center gap-5 px-4 py-3 pb2.5 rounded-[41px] text-[14px] text-[#072635] font-bold ${
                activePage ? "bg-[#01F0D0] " : " hover:bg-light-gray"
              }`}
            >
              {route.icon}
              <span className="capitalize">{route.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="flex">
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
          <Image
            className="rounded-full w-8 h-8"
            src={ProfileImage}
            alt="user-profile"
            width={40}
            height={40}
          />
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-semibold ml-1 text-14">
              Michael
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
