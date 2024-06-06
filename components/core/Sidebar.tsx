"use client";

import React from "react";
import Link from "next/link";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import { Route, routes } from "@/utils/routes";
import { Button } from "../ui/button";
import Image from "next/image";

import Logo from "../../public/images/TestLogo.svg";

import { usePathname } from "next/navigation";

import useAppState from "@/store";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useAppState();

  const handleCloseSideBar = () => {
    if (screenSize !== undefined) {
      if (activeMenu && screenSize <= 900) {
        setActiveMenu(false);
      }
    }
  };

  const pathname = usePathname();

  return (
    <>
      <div className="mt20 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 md:shadow-sm">
        <div className="pb10 mt20">
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;
