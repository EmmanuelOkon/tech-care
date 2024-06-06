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
      <div className="flex darkMode:bg-main-dark-bg">
        <div className="bg-slate-100 min-h-screen w-full">
          <div className="static bg-main-bg dark:bg-main-dark-bg w-full">
            <Navbar />
          </div>
          <div className="flex m-2">
            <div className="w64 md: w-72  dark:bg-secondary-dark-bg bg-white rounded-[16px] px2">
              {/* <Sidebar /> */}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
