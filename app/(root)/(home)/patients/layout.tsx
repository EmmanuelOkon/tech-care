"use client";

import { Sidebar } from "@/components/core";
import DiagnosisHistory from "@/components/core/DiagnosisHistory";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex item-center justifybetween w-full gap-4">
      <div className="w-full max-w-[367px] bg-white rounded-[16px] px2">
        <Sidebar />
      </div>

      <div className=" w-full max-w-[766px] bg-green-400 p-4 rounded-[16px] ">
        <DiagnosisHistory />
      </div>
      <div className="w-full max-w-[367px] bg-yellow-500 rounded-[16px] p-4  ">
        Right hand side
      </div>
    </div>
  );
};

export default Layout;
