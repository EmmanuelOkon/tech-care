"use client";

import React from "react";

import { FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/core/Sidebar";

import Navbar from "@/components/core/Navbar";

import useAppState from "@/store";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { activeMenu } = useAppState();
  const currentColor = "#00FFFF";

  return (
    <div>
      <div className="flex">
        <div className="bg-[#F6F7F8] min-h-screen w-full m-[18px] ">
          <div className="static w-full">
            <Navbar />
          </div>
          <div className="my-[18px] flx itemscenter gap-4 ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
