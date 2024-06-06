"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* {children} */}

      <div>
        Hello
      </div>
    </div>
  );
};

export default Layout;
