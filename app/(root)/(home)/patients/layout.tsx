"use client";
import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex item-center w-full gap-4">
      {children}
    </div>
  );
};

export default Layout;
