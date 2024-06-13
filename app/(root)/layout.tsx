"use client";

import React from "react";

import { FiSettings } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Patients from "@/components/core/Patients";

import Navbar from "@/components/core/Navbar";

import useAppState from "@/store";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { activeMenu } = useAppState();
  const currentColor = "#00FFFF";

  return (
    <div className="flex">
      <div className="bg-[#F6F7F8] min-h-screen w-full m-[18px] ">
        <div className="static w-full">
          <Navbar />
        </div>
        <div className="my-[18px]">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
