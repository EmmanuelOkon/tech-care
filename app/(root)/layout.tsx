import React from "react";

import Navbar from "@/components/core/Navbar";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
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
