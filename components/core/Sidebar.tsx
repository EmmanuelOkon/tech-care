"use client";

import * as React from "react";
import Link from "next/link";

import { MdOutlineCancel } from "react-icons/md";

import { Route, routes } from "@/utils/routes";
import { Button } from "../ui/button";
import Image from "next/image";

import Logo from "../../public/images/TestLogo.svg";

import { usePathname } from "next/navigation";

import useAppState from "@/store";
import { Icons } from "../icons";
import DetailsSkeleton from "./Skeleton";

const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    fetchPatients,
    patients,
    isLoading,
  } = useAppState();

  const handleCloseSideBar = () => {
    if (screenSize !== undefined) {
      if (activeMenu && screenSize <= 900) {
        setActiveMenu(false);
      }
    }
  };

  React.useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);


  // const pathname = usePathname();

  return (
    <>
      <div className="mt20 hscreen overflowauto h[1054px] p4 bg-none  ">
        <div className=" text-[#072635] flex items-center p-4 justify-between">
          <span className="text-[24px] font-extrabold ">Patients</span>
          <Icons.Search className="floatright" aria-label="Search Icon" />
        </div>
        <div className="mb-6 h-screen [1054px] md:overflow-y-scroll overflow-auto md:hover:overflow-auto">
          {isLoading ? (
            <DetailsSkeleton />
          ) : patients ? (
            <div className="bg-amber-00 ">
              {patients.map((patient) => (
                <div
                  key={patient.name}
                  className="flex items-center justify-between hover:bg-[#D8FCF7]/40 hover:cursor-pointer gap-3 py-[16px] px-[20px] pr-[16px] w-full"
                >
                  <div className="flex items-center">
                    <Image
                      src={patient.profile_picture}
                      alt="patient-image"
                      width={38}
                      height={38}
                      className="rounded-full"
                    />
                    <div className="flex flex-col pl-[12px]">
                      <span className="text-[#072635] font-bold">
                        {patient.name}
                      </span>
                      <div className="flex items-center text-[#707070]">
                        <span>{patient.gender}</span>,&nbsp;
                        <span>{patient.age}</span>
                      </div>
                    </div>
                  </div>
                  <div className="justify-end p-2 flex items-center rounded-sm">
                    <Icons.MenuHorizontal
                      className="text-[#072635]"
                      aria-label="Menu Icon"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No patient data available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
